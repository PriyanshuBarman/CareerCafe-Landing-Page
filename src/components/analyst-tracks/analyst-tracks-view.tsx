"use client";

import { useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { ANALYST_TRACKS, type TrackId } from "@/constants/analyst-tracks";
import AboutCard from "./about-card";
import DetailCard from "./detail-card";
import FilterButtons from "./filter-buttons";

export default function AnalystTracksView() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const role = (searchParams.get("role") ??
    searchParams.get("track")) as TrackId | null;

  const [selectedRoleId, setSelectedRoleId] = useState<TrackId>(() =>
    role && ANALYST_TRACKS[role] ? role : "business",
  );

  const activeRole = ANALYST_TRACKS[selectedRoleId] ?? ANALYST_TRACKS.business;

  const handleSelectRole = (roleId: TrackId) => {
    setSelectedRoleId(roleId);

    const params = new URLSearchParams(searchParams.toString());
    params.set("role", roleId);
    router.replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div>
      <FilterButtons
        selectedRoleId={selectedRoleId}
        onSelectRole={handleSelectRole}
      />

      <div className="mt-10 flex flex-col gap-8 sm:mt-14 md:flex-row">
        <DetailCard activeRole={activeRole} />
        <AboutCard activeRole={activeRole} />
      </div>
    </div>
  );
}
