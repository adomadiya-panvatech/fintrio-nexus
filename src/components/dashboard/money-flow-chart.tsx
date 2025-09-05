import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { motion } from "framer-motion";

const data = [
  { month: 'Jan', invested: 5, distributed: 0, redeemed: 0 },
  { month: 'Feb', invested: 10, distributed: 0, redeemed: 0 },
  { month: 'Mar', invested: 15, distributed: 0, redeemed: 0 },
  { month: 'Apr', invested: 8, distributed: 0, redeemed: 0 },
  { month: 'May', invested: 12, distributed: 0, redeemed: 0 },
  { month: 'Jun', invested: 20, distributed: 5, redeemed: 0 },
  { month: 'Jul', invested: 25, distributed: 8, redeemed: 0 },
  { month: 'Aug', invested: 240, distributed: 12, redeemed: 15 }
];

export function MoneyFlowChart() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.4 }}
    >
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Money Flow</CardTitle>
          <Select defaultValue="2025">
            <SelectTrigger className="w-20">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="2025">2025</SelectItem>
              <SelectItem value="2024">2024</SelectItem>
              <SelectItem value="2023">2023</SelectItem>
            </SelectContent>
          </Select>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis 
                dataKey="month" 
                stroke="hsl(var(--muted-foreground))"
                fontSize={12}
              />
              <YAxis 
                stroke="hsl(var(--muted-foreground))"
                fontSize={12}
              />
              <Tooltip 
                contentStyle={{
                  backgroundColor: 'hsl(var(--card))',
                  border: '1px solid hsl(var(--border))',
                  borderRadius: '8px',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                }}
              />
              <Legend />
              <Bar 
                dataKey="invested" 
                fill="hsl(var(--chart-1))" 
                name="Invested"
                radius={[2, 2, 0, 0]}
              />
              <Bar 
                dataKey="distributed" 
                fill="hsl(var(--chart-3))" 
                name="Distributed"
                radius={[2, 2, 0, 0]}
              />
              <Bar 
                dataKey="redeemed" 
                fill="hsl(var(--chart-4))" 
                name="Redeemed"
                radius={[2, 2, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </motion.div>
  );
}