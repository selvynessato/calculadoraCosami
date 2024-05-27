function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5zaWQa5HgV0":
        Script1();
        break;
  }
}

function Script1()
{
  // Refer to Storyline player
let player = GetPlayer();

// Get input numeric variables from Articulate Storyline
let loanAmount = player.GetVar("LoanAmount");
let term = player.GetVar("Term");
let interestRate = player.GetVar("InterestRate1");
let comision = player.GetVar("Comision");

// Convert annual interest rate to monthly interest rate
let monthlyInterestRate = (interestRate / 100) / 12;

// Convert Comision to percentage and calculate comision amount
let comisionp = (comision / 100);
let pagocomision = comisionp * loanAmount;

// Calculate monthly declining balance payment using the provided formula (Cuota Fija)
let numerator = loanAmount * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, term);
let denominator = Math.pow(1 + monthlyInterestRate, term) - 1;
let monthlyPayment1 = numerator / denominator;

// Calculate total payments for declining balance (Cuota Fija)
let pagoTotFrances = (monthlyPayment1 * term) + pagocomision;

// Calculate monthly declining balance payment using the formula you provided (Cuota Sobre Saldos)
let numerator2 = loanAmount * Math.pow(1 + (monthlyInterestRate / term), term);
let monthlyPayment2 = numerator2 / term;

// Calculate total payments for declining balance (Cuota Sobre Saldos)
let pagoTotSaldos = (monthlyPayment2 * term) + pagocomision;

// Display monthly fixed payment to user
player.SetVar("payment1", +monthlyPayment1.toFixed(2)); // Se redondea a dos decimales

// Display total payment for Declining Balance (Cuota Fija) to user
player.SetVar("PagoTotFrances", +pagoTotFrances.toFixed(2)); // Se redondea a dos decimales

// Display monthly declining balance payment to user (Cuota Sobre Saldos)
player.SetVar("payment2", +monthlyPayment1.toFixed(2)); // Se redondea a dos decimales

// Display total payment for Declining Balance (Cuota Sobre Saldos) to user
player.SetVar("PagoTotSaldos", +pagoTotSaldos.toFixed(2)); // Se redondea a dos decimales

}

