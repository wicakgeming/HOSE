"use client"

import BPMChart from "@/components/Sensor/DataTable/BPMChart";
import SPOChart from "@/components/Sensor/DataTable/SPOChart";
import SuhuChart from "@/components/Sensor/DataTable/SuhuChart";
import DataTable from "@/components/Sensor/DataTable/DataTable";

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
