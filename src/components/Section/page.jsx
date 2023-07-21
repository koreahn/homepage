"use client";
import dynamic from "next/dynamic";
import withLazyLoad from "@/hoc/withLazyLoad";

function Section({ pageId }) {
  const DynamicComponent = dynamic(() => import(`@/app/${pageId}/page`));
  return <DynamicComponent />;
}

export default withLazyLoad(Section);
