"use client";

import { useAppStore } from "@/store/store";
import styles from "./Drawer.module.scss";

export function Drawer() {
  const { companies, selectedCompanyId, setSelectedCompanyId } = useAppStore();

  return (
    <aside className={"drawer"}>
      <div className={"drawer-header"}>
        <h2>HanaLoop</h2>
        <p>CARBON DASHBOARD</p>
      </div>

      <nav className={"drawer-nav"}>
        <div className={"nav-label"}>ORGANIZATIONS</div>
        {companies.map((company) => (
          <button
            key={company.id}
            onClick={() => setSelectedCompanyId(company.id)}
            className={`${"nav-item "} ${selectedCompanyId === company.id ? styles.active : ""}`}
          >
            <span className={"nav-item-title "}>{company.name}</span>
          </button>
        ))}
      </nav>

      <div className={"drawer-footer"}>
        <p className={"footer-text "}>© 2026 HanaLoop</p>
      </div>
    </aside>
  );
}
