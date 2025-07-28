// Hangman
// An implementation of the game
// Marissa Henriquez <marissa.henriquez@gmail.com>
// June 2024


// Print the blank game board before each turn
  // Gameplay is initiated with a START button
	  // Randomly generate a hidden word from an index of hidden words
// Generate a letter bank for user input
  // Prompt user to pick a letter 
    // Accept user input
      // Validate user guess
        // Reject letter guess if incorrect letter is chosen or accept user input if correct letter is chosen
        // Cross letter off in word bank after user input is validated
        // Reveal letters on hidden word for the correct corresponding user input from wordbank
  // Evaluate remaining letters
    // Prompt user input until all blanks are filled
      // Repeat steps for accepting user input
      // Once user fills all blanks accept user win
    // Initiate hangman animation on activation of user win
      // Clear letterbank and highlight final word
	// Generate game refresh button
		// Clear gameplay and print blank game board
		// Remove previous gameplay words once completed
	// Refresh hidden wordbank on page refresh

