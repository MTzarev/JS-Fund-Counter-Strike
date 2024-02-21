
function counterStrike(input) {
    let energy = Number(input.shift());
    let counter = 0;

    for (let i = 0; i < input.length; i++) {
        let command = input[i];

        if (command !== "End of battle") {
            if (energy >= Number(command)) {
                counter++;
                energy -= Number(command);

                if (counter % 3 === 0) {
                    energy += counter;
                }
            } else {
                console.log(`Not enough energy! Game ends with ${counter} won battles and ${energy} energy`);
                
            }
        } else {
            console.log(`Won battles: ${counter}. Energy left: ${energy}`);
          
        }
    }
}

counterStrike(["100",
    "10",
    "10",
    "10",
    "1",
    "2",
    "3",
    "73",
    "10"]);

counterStrike(["200",
    "54",
    "14",
    "28",
    "13",
    "End of battle"]);