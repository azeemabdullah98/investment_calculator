import { Component, EventEmitter, output, Output, signal } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { InvestmentInput } from "../investment-input.model";
import { InvestmentService } from "../investment-result.service";

@Component({
  selector: "app-user-input",
  standalone: true,
  imports: [FormsModule],
  templateUrl: "./user-input.component.html",
  styleUrl: "./user-input.component.css",
})
export class UserInputComponent {
  // @Output() calculate = new EventEmitter<InvestmentInput>();
  // calculate = output<InvestmentInput>();
  // enteredInitialInvestment = '0';
  // enteredAnnualInvestment = '0';
  // enteredExpectedReturn = '0';
  // enteredDuration = '5';
  enteredInitialInvestment = signal("0");
  enteredAnnualInvestment = signal("0");
  enteredExpectedReturn = signal("0");
  enteredDuration = signal("5");

  constructor(private investmentService: InvestmentService) {}
  onSubmit() {
    this.investmentService.CalculateInvestmentResults({
      initialInvestment: +this.enteredInitialInvestment(),
      duration: +this.enteredDuration(),
      annualInvestment: +this.enteredAnnualInvestment(),
      expectedReturn: +this.enteredExpectedReturn(),
    });
    this.enteredInitialInvestment.set("0");
    this.enteredAnnualInvestment.set("0");
    this.enteredExpectedReturn.set("0");
    this.enteredDuration.set("5");
  }
}
