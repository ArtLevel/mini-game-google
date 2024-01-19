const {Game} = require('./game');

describe("game tests", () => {
    it("settings test", () => {
        const game = new Game();
        // setter
        game.settings = {
            gridSize: {
                columnsCount: 4,
                rowsCount: 5
            }
        }

        // getter
        const settings = game.settings;

        expect(settings.gridSize.columnsCount).toBe(4);
        expect(settings.gridSize.rowsCount).toBe(5);
    })

    it("start game", async () => {
        const game = new Game();
        // setter
        game.settings = {
            gridSize: {
                columnsCount: 4,
                rowsCount: 5
            }
        }

        expect(game.status).toBe('pending');
        await game.start();
        expect(game.status).toBe('in-progress');
    })

    it("check player init positions", async () => {
        for (let i = 0; i < 10; i++) {
            const game = new Game();
            // setter
            game.settings = {
                gridSize: {
                    columnsCount: 1,
                    rowsCount: 3
                }
            }

            await game.start();

            expect([0]).toContain(game.players[0].position.x);
            expect([0,1,2]).toContain(game.players[0].position.y);

            expect([0]).toContain(game.players[1].position.x);
            expect([0,1,2]).toContain(game.players[1].position.y);

            expect(
                game.players[0].position.x !== game.players[1].position.x ||
                game.players[0].position.y !== game.players[1].position.y
            ).toBe(true);
        }
    })

    it("check google init positions", async () => {
        for (let i = 0; i < 10; i++) {
            const game = new Game();
            // setter
            game.settings = {
                gridSize: {
                    columnsCount: 1,
                    rowsCount: 3
                }
            }

            await game.start();

            expect([0]).toContain(game.google.position.x);
            expect([0,1,2]).toContain(game.google.position.y);

            expect(
                (game.google.position.x !== game.players[0].position.x ||
                game.google.position.y !== game.players[0].position.y) &&
                (game.google.position.x !== game.players[1].position.x ||
                    game.google.position.y !== game.players[1].position.y)
            ).toBe(true);
        }
    })
})
