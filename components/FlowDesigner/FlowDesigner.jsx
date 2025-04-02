import React from "react";
import Bulb from "../../icons/Bulb";
import SectionTitle from "../SectionTitle";
import { ReactFlow, MiniMap, Controls, Background, useNodesState, useEdgesState, addEdge } from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { useCallback } from "react";

const initialNodes = [
  {
    id: "1",
    position: { x: 250, y: 5 },
    data: { label: "Alarm" },
    type: "input",
  },
  { id: "2", position: { x: 100, y: 100 }, data: { label: "Snooze" } },
  { id: "3", position: { x: 400, y: 100 }, data: { label: "Wake Up" } },
  {
    id: "4",
    position: { x: 250, y: 200 },
    data: { label: "Sleep/Start the day" },
    type: "output",
  },
];

const initialEdges = [
  { id: "e1-2", source: "1", target: "2" },
  { id: "e1-3", source: "1", target: "3" },
  { id: "e2-4", source: "2", target: "4" },
  { id: "e3-4", source: "3", target: "4" },
];

const Flow = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  return (
    <>
      <SectionTitle
        icon={<Bulb />}
        title={"Flow Designer"}
        subHeading={"Visualize Connections"}
      />
      <div style={{ width: "100%", height: "500px" }}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          fitView
        >
          <MiniMap />
          <Controls />
          <Background variant="dots" gap={12} size={1} />
        </ReactFlow>
      </div>
    </>
  );
};

export default Flow;
