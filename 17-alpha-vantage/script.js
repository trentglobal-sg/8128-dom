document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("#btnSearch")
        .addEventListener("click", async function () {
            const symbol = document.querySelector("#symbol").value;
            if (symbol) {
                const data = await fetchWeeklyData(symbol);

                const stockData = data['Weekly Time Series'];
                const dates = Object.keys(stockData);
                const convertedDates = dates.map(d => new Date(d));
                // console.log(dates);

                // const closePrices = [];
                // for (let d of dates) {
                //   const closingPrice = stockData[d]['4. close'];
                //   closePrices.push(closingPrice);
                // }
                closePrices = dates.map((d) => stockData[d]['4. close']);
                drawChart(closePrices, convertedDates)
            }
        })

    function drawChart(yAxis, xAxis) {
        const options = {
            series: [
                {
                    name: 'Sign-ups',
                    data: yAxis,
                },
            ],
            chart: {
                height: 350,
                type: 'line',
                zoom: {
                    enabled: false,
                },
            },
            dataLabels: {
                enabled: false,
            },
            stroke: {
                curve: 'straight',
            },
            title: {
                text: 'New Sign-ups by Month',
                align: 'left',
            },
            xaxis: {
                categories: xAxis,
            },
        }

        const chart = new ApexCharts(document.querySelector('#chart'), options)
        chart.render()
    }



})

