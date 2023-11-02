import mongoose, { mongo } from "mongoose";
import { loadType } from "mongoose-currency";

const Schema = mongoose.Schema;

loadType(mongoose)

const daySchema = new Schema(
    {
        data: String,
        revenue: {
            type: mongoose.Types.Curreny,
            curreny: "USD",
            get: (v) => v/100
        },
        expenses: {
            type: mongoose.Types.Curreny,
            curreny: "USD",
            get: (v) => v/100
        }, 
    }
)

const monthSchema = new Schema(
    {    
        month: String,
        revenue: {
            type: mongoose.Types.Curreny,
            curreny: "USD",
            get: (v) => v/100
        },
        expenses: {
            type: mongoose.Types.Curreny,
            curreny: "USD",
            get: (v) => v/100
        },
        operatonalExpenses: {
            type: mongoose.Types.Curreny,
            curreny: "USD",
            get: (v) => v/100
        },
        nonOperatonalExpenses: {
            type: mongoose.Types.Curreny,
            curreny: "USD",
            get: (v) => v/100
        }
    },
    { toJSON: { getters: true } }
)

const KPISchema = new Schema(
    {
        totalProfit: {
            type: mongoose.Types.Curreny,
            curreny: "USD",
            get: (v) => v/100
        },
        totalRevenue: {
            type: mongoose.Types.Curreny,
            curreny: "USD",
            get: (v) => v/100
        },
        totalExpenses: {
            type: mongoose.Types.Curreny,
            curreny: "USD",
            get: (v) => v/100
        },
        expenseByCategory: {
            type: Map,
            of: {
                type: mongoose.Types.Curreny,
                curreny: "USD",
                get: (v) => v/100
            }
        },
        monthlyData: [monthSchema],
        dailyData: [daySchema]
    },
    { timestamps: true, toJSON: { getters: true } }
);

const KPI = mongoose.model("KPI", KPISchema);

export default KPI;