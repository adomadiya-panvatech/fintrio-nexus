import { motion } from "framer-motion";
import { KPICards } from "@/components/dashboard/kpi-cards";
import { MoneyFlowChart } from "@/components/dashboard/money-flow-chart";
import { InvestorsChart } from "@/components/dashboard/investors-chart";

const Index = () => {
  return (
    <div className="flex-1 space-y-6 p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <div className="text-sm text-muted-foreground">
            Welcome back, Fintrio Estate
          </div>
        </div>
      </motion.div>

      {/* KPI Cards */}
      <KPICards />

      {/* Charts Row */}
      <div className="grid gap-6 lg:grid-cols-2">
        <MoneyFlowChart />
        <InvestorsChart />
      </div>
    </div>
  );
};

export default Index;
