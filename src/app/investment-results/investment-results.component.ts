import { CurrencyPipe } from "@angular/common";
import { Component, inject, input, Input } from "@angular/core";
import { InvestmentService } from "../investment-result.service";

@Component({
  selector: "app-investment-results",
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: "./investment-results.component.html",
  styleUrl: "./investment-results.component.css",
})
export class InvestmentResultsComponent {
  private investmentService = inject(InvestmentService);

  // @Input() resultsData?: {
  //   year: number;
  //   interest: number;
  //   valueEndOfYear: number;
  //   annualInvestment: number;
  //   totalInterest: number;
  //   totalAmountInvested: number;
  // }[];

  get resultsData() {
    return this.investmentService.results;
  }
}
