import { formatter, calculateInvestmentResults } from "../util/investment";


const Results = ({ input }) => {
    console.log(input);
    const annualData = calculateInvestmentResults(input);

    const initialInvestment = annualData[0].valueEndOfYear - annualData[0].interest - annualData[0].annualInvestment;


    const annualDataRows = annualData.map((row) => {
        const Totalinterest = row.valueEndOfYear - row.annualInvestment * row.year - initialInvestment;
        const TotalCapital = row.valueEndOfYear - Totalinterest;
        return <tr key={row.year}>
            <td>
                {row.year}
            </td>
            <td>
                {formatter.format(row.valueEndOfYear)}
            </td>
            <td>
                {formatter.format(row.interest)}
            </td>
            <td>
                {formatter.format(Totalinterest)}
            </td>
            <td>
                {formatter.format(TotalCapital)}
            </td>
        </tr>
    });

    return <table id="result">
        <thead>
            <tr>
                <th>
                    Year
                </th>
                <th>
                    Investment Value
                </th>
                <th>
                    Interest (Year)
                </th>
                <th>Total Interest</th>
                <th>
                    Investeed Capital
                </th>
            </tr>
        </thead>
        <tbody>
            {annualDataRows}
        </tbody>
    </table>
}

export default Results;