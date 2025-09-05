import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Plus, Filter, Search, Eye } from "lucide-react";
import { mockOffers } from "@/lib/mock-data";

export default function OffersPage() {
  return (
    <div className="flex-1 space-y-6 p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="flex items-center justify-between"
      >
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Offers</h1>
          <p className="text-muted-foreground">Manage your investment offerings</p>
        </div>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          Add New Offer
        </Button>
      </motion.div>

      {/* Filters */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
        className="flex flex-col sm:flex-row gap-4"
      >
        <div className="flex-1">
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Offering" className="pl-9" />
          </div>
        </div>
        <Select defaultValue="all">
          <SelectTrigger className="w-full sm:w-[200px]">
            <SelectValue placeholder="Select status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Status</SelectItem>
            <SelectItem value="active">Active</SelectItem>
            <SelectItem value="closed">Closed</SelectItem>
            <SelectItem value="coming_soon">Coming Soon</SelectItem>
          </SelectContent>
        </Select>
        <Button variant="outline" className="gap-2">
          <Filter className="h-4 w-4" />
          Filter
        </Button>
        <Button>Apply</Button>
      </motion.div>

      {/* Offers Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {mockOffers.map((offer, index) => (
          <motion.div
            key={offer.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
          >
            <Card className="h-full hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
              <CardHeader className="space-y-4">
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center">
                  <div className="w-16 h-16 bg-primary/20 rounded-lg flex items-center justify-center">
                    <span className="text-primary font-bold text-lg">
                      {offer.name.charAt(0)}
                    </span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Badge 
                      variant={offer.status === 'active' ? 'default' : 'secondary'}
                      className="text-xs"
                    >
                      {offer.status === 'active' ? 'Active' : 'Inactive'}
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      {offer.type.replace('_', ' ').toUpperCase()}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg line-clamp-2">{offer.name}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-muted-foreground">Min Amount</p>
                    <p className="font-medium">${offer.minInvestment.toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Target IRR</p>
                    <p className="font-medium">{offer.targetIRR}%</p>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Funding end date</span>
                    <span>{new Date(offer.fundingEndDate).toLocaleDateString()}</span>
                  </div>
                  <div className="flex justify-between text-sm font-medium">
                    <span className="text-success">
                      ${(offer.totalRaised / 1000000).toFixed(0)} M
                    </span>
                    <span className="text-muted-foreground">Offering Size</span>
                  </div>
                </div>

                <Button className="w-full gap-2" variant="outline">
                  <Eye className="h-4 w-4" />
                  View Offer
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}