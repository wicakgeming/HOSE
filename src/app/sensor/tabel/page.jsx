"use client"

import BPMChart from "@/components/Table/DataTable/BPMChart";
import SPOChart from "@/components/Table/DataTable/SPOChart";
import SuhuChart from "@/components/Table/DataTable/SuhuChart";
import DataTable from "@/components/Table/DataTable/DataTable";

const page = () => {
    return (
        <div className="text-white">
        <div className="grid md:grid-cols-3 sm:grid-cols-1 items-center justify-center gap-4 mx-auto max-w-10xl">
            <div className="bg-gray-800 p-4 rounded-md">
            <BPMChart />
            </div>
            <div className="bg-gray-800 p-4 rounded-md">
            <SPOChart />
            </div>
            <div className="bg-gray-800 p-4 rounded-md">
            <SuhuChart />
            </div>
        </div>
        <div className="mt-4">
            <DataTable />
        </div>
        </div>
    );
    };

export default page;
