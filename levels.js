const LEVELS = {
    "levels": [
        {
            "id": 1,
            "name": "Puzzle #1",
            "size": 4,
            "grid": [
                ["S", "E", "E", "E"],
                ["E", "E", "E", "E"],
                ["E", "E", "E", "E"],
                ["E", "E", "E", "E"]
            ],
            "operations": [
                {
                    "type": "=",
                    "cell1": {"row": 1, "col": 0},
                    "cell2": {"row": 1, "col": 1}
                }
                // {
                //     "type": "=",
                //     "cell1": {"row": 1, "col": 0},
                //     "cell2": {"row": 1, "col": 1}
                // },
                // {
                //     "type": "x",
                //     "cell1": {"row": 0, "col": 0},
                //     "cell2": {"row": 1, "col": 0}
                // },
                // {
                //     "type": "x",
                //     "cell1": {"row": 0, "col": 1},
                //     "cell2": {"row": 1, "col": 1}
                // }
            ],
            "solution": [
                ["S", "E", "E", "E"],
                ["E", "E", "E", "E"],
                ["E", "E", "E", "E"],
                ["E", "E", "E", "E"]
            ]        
        }
        // {
        //     "id": 2,
        //     "name": "Puzzle #2",
        //     "size": 6,
        //     "grid": [
        //         ["E", "E", "E", "E", "E", "E"],
        //         ["S", "S", "E", "E", "S", "E"],
        //         ["S", "E", "E", "M", "E", "M"],
        //         ["E", "E", "M", "E", "E", "E"],
        //         ["M", "E", "E", "E", "E", "E"],
        //         ["E", "E", "E", "S", "S", "E"]
        //     ],
        //     "operations": [
        //         {
        //             "type": "x",
        //             "cell1": {"row": 1, "col": 2},
        //             "cell2": {"row": 1, "col": 3}
        //         },
        //         {
        //             "type": "x",
        //             "cell1": {"row": 2, "col": 2},
        //             "cell2": {"row": 2, "col": 3}
        //         },
        //         {
        //             "type": "x",
        //             "cell1": {"row": 4, "col": 5},
        //             "cell2": {"row": 4, "col": 6}
        //         },
        //         {
        //             "type": "=",
        //             "cell1": {"row": 5, "col": 4},
        //             "cell2": {"row": 5, "col": 5}
        //         }
        //     ],
        //     "solution": [
        //         ["M", "M", "S", "S", "M", "S"],
        //         ["S", "S", "M", "M", "S", "M"],
        //         ["S", "M", "S", "M", "S", "M"],
        //         ["M", "S", "M", "S", "M", "S"],
        //         ["M", "S", "S", "M", "M", "S"],
        //         ["S", "M", "M", "S", "S", "M"]
        //     ]        
        // }
    ]
};
