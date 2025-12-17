import HomeTutores from "@/components/Paginas/HomepageTutores/HomeTutores";
import Header from "@/components/Sidebar/Header/Header";
import Sidebar from "@/components/Sidebar/Header/Sidebar";
import { Suspense } from "react";

export default function TutoresPage() {
  return (
      <Suspense fallback={<div>Carregando curso...</div>}>
        <div className="flex">
          <Sidebar />
          <div className="flex-1">
            <Header id={1} />
            <main>
              <HomeTutores />
            </main>
          </div>
        </div>
      </Suspense>
    );
}
