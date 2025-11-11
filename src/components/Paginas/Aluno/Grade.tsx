import GaugeChart from "./GaugeChart/GaugeChart";
import AtividadesChart from "./AtividadesChart/AtividadesChart";

interface GradeProps {

}

export default function Grade({ }: GradeProps) {
    return (
        <div className="flex gap-4 mb-8 justify-between">
            <div className="Box4 flex-1 p-6">
                <h1 className="text-xl font-poppins font-semibold text-left">
                    Nota final
                </h1>
                <p className="text-[#9291A5] mb-6 pb-4 border-b border-gray-200">da disciplina</p>
                <div className="flex p-2 justify-center"><GaugeChart /></div>
            </div>

            <div className="Box4 flex-1 p-6">
                <h1 className="text-xl font-poppins font-semibold text-left">
                    Notas
                </h1>
                <p className="text-[#9291A5] mb-4 pb-4 border-b border-gray-200">da disciplina</p>
                <div className="overflow-auto">
                    <AtividadesChart />
                </div>
            </div>
        </div>
    );
};
