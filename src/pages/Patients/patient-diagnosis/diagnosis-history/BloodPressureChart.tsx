// library imports
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ChartOptions,
    ChartData
} from 'chart.js';

// local imports
import { BloodPressureChartProps, ChartDataType, HealthData } from '../../../../common/Interfaces';

const BloodPressureChart: React.FC<BloodPressureChartProps> = ({ data }: BloodPressureChartProps) => {
    ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

    function prepareChartData(data: HealthData[]): ChartDataType {
        const months = data.map(item => `${item.month.slice(0, 3)}, ${item.year}`).reverse();
        const systolic = data.map(item => item.blood_pressure.systolic.value).reverse();
        const diastolic = data.map(item => item.blood_pressure.diastolic.value).reverse();
        return { months, systolic, diastolic };
    }

    const chartData = prepareChartData(data);

    const options: ChartOptions<'line'> = {
        responsive: true,
        maintainAspectRatio: false, // Allows the chart to resize based on container
        plugins: {
            legend: {
                display: false,
                position: 'top' as const,
            },
            title: {
                display: false,
                text: 'Blood Pressure',
            },
        },
        scales: {
            y: {
                beginAtZero: false,
                title: {
                    display: false,
                    text: 'Blood Pressure (mmHg)'
                }
            }
        },
    };

    const chartConfig: ChartData<'line'> = {
        labels: chartData.months,
        datasets: [
            {
                label: 'Systolic BP',
                data: chartData.systolic,
                borderColor: '#C26EB4',
                backgroundColor: '#C26EB4',
                tension: 0.4
            },
            {
                label: 'Diastolic BP',
                data: chartData.diastolic,
                borderColor: '#8C6FE6',
                backgroundColor: '#8C6FE6',
                tension: 0.4
            },
        ],
    };

    return <Line options={options} data={chartConfig} />;
}

export default BloodPressureChart;