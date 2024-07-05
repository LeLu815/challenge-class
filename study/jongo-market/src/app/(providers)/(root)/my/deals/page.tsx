"use client";

import Page from "@/components/Page";
import { supabase } from "@/context/supabase.context";
import { Tables } from "@/types/supabase";
import Image from "next/image";
import { useEffect, useState } from "react";

type Deal = Tables<"deals">;

function MyDealsPage() {
  const [myDeals, setMyDeals] = useState<Deal[]>([]);
  useEffect(() => {
    (async () => {
      const user = await supabase.auth.getUser().then((res) => res.data.user);
      if (!user) return;

      const { data } = await supabase
        .from("deals")
        .select("*")
        .eq("sellerId", user.id);
      if (!data) return;

      setMyDeals(data);
    })();
  }, []);

  return (
    <Page title="내 판매글">
      {myDeals.map((deal) => (
        <div key={deal.content}>
          <div className="relative aspect-square">
            <Image
              className="object-cover"
              fill
              alt={deal.content}
              src={deal.imageUrl}
            />
          </div>
          <p>{deal.content}</p>
        </div>
      ))}
    </Page>
  );
}

export default MyDealsPage;
