import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, Filter, FileDown, Plus } from "lucide-react";
import { mockRedemptions } from "@/lib/mock-data";

export default function RedemptionsPage() {
  return (
    <div className="flex-1 space-y-6 p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="flex items-center justify-between"
      >
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Redemption</h1>
          <p className="text-muted-foreground">Manage redemption requests</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="gap-2">
            <FileDown className="h-4 w-4" />
            Export
          </Button>
          <Button className="gap-2">
            <Plus className="h-4 w-4" />
            Add New
          </Button>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
      >
        <Card>
          <CardHeader>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="Account Name" className="pl-9" />
                </div>
              </div>
              <Button variant="outline" className="gap-2">
                <Filter className="h-4 w-4" />
                Filter
              </Button>
              <Button>Apply</Button>
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-12">All</TableHead>
                    <TableHead>Account Name</TableHead>
                    <TableHead>Account Type</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Offer Name</TableHead>
                    <TableHead className="text-right">Invested Amount</TableHead>
                    <TableHead className="text-right">Redeem Amount</TableHead>
                    <TableHead>KYC Status</TableHead>
                    <TableHead>Redeem Status</TableHead>
                    <TableHead>Created</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {mockRedemptions.map((redemption, index) => (
                    <motion.tr
                      key={redemption.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.2 + index * 0.05 }}
                      className="hover:bg-muted/50"
                    >
                      <TableCell>
                        <input type="checkbox" className="rounded" />
                      </TableCell>
                      <TableCell className="font-medium text-primary hover:underline cursor-pointer">
                        {redemption.accountName}
                      </TableCell>
                      <TableCell>Individual</TableCell>
                      <TableCell className="text-muted-foreground">
                        Email placeholder
                      </TableCell>
                      <TableCell>{redemption.offerName}</TableCell>
                      <TableCell className="text-right font-medium">
                        ${redemption.investedAmount.toLocaleString()}
                      </TableCell>
                      <TableCell className="text-right font-medium">
                        ${redemption.redeemAmount.toLocaleString()}
                      </TableCell>
                      <TableCell>
                        <Badge 
                          variant="default" 
                          className="bg-success text-success-foreground"
                        >
                          {redemption.kycStatus}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Badge 
                          variant={redemption.redeemStatus === 'completed' ? 'default' : 'secondary'}
                          className={redemption.redeemStatus === 'completed' ? 'bg-primary text-primary-foreground' : ''}
                        >
                          {redemption.redeemStatus === 'completed' ? 'Completed' : 'Pending'}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-muted-foreground">
                        {new Date(redemption.createdAt).toLocaleDateString()}
                      </TableCell>
                    </motion.tr>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}