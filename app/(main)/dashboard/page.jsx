"use client";

import { getDashboardData, getUserAccounts } from '@/actions/dashboard';
import CreateAccountDrawer from '@/components/create-account-drawer';
import { Card, CardContent } from '@/components/ui/card';
import { Plus } from 'lucide-react';
import React, { Suspense, useEffect, useState } from 'react';
import AccountCard from './_components/account-card';
import { BudgetProgress } from './_components/budget-progress';
import { getCurrentBudget } from '@/actions/budget';
import { DashboardOverview } from './_components/transaction-overview';

function DashboardPage() {
  const [accounts, setAccounts] = useState([]);
  const [defaultAccount, setDefaultAccount] = useState(null);
  const [budgetData, setBudgetData] = useState(null);
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const fetchedAccounts = await getUserAccounts();
      setAccounts(fetchedAccounts);

      const defaultAcc = fetchedAccounts?.find((account) => account.isDefault);
      setDefaultAccount(defaultAcc);

      if (defaultAcc) {
        const budget = await getCurrentBudget(defaultAcc.id);
        setBudgetData(budget);

        const trans = await getDashboardData(defaultAcc.id);
        setTransactions(trans);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="space-y-8">
      {/* Budget progress */}
      <BudgetProgress
        initialBudget={budgetData?.budget}
        currentExpenses={budgetData?.currentExpenses || 0}
      />

      {/* Overview */}
      <Suspense fallback={"Loading overview..."}>
        <DashboardOverview accounts={accounts} transactions={transactions || []} />
      </Suspense>

      {/* Accounts Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <CreateAccountDrawer>
          <Card className="hover:shadow-md transition-shadow cursor-pointer border-dashed">
            <CardContent className="flex flex-col items-center justify-center h-full pt-5 text-muted-foreground">
              <Plus className="h-10 w-10 mb-2" />
              <p className="text-sm font-medium">Add new Account</p>
            </CardContent>
          </Card>
        </CreateAccountDrawer>

        {accounts.length > 0 &&
          accounts?.map((account) => <AccountCard key={account.id} account={account} />)}
      </div>
    </div>
  );
}

export default DashboardPage;
