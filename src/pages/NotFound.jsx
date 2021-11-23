import React from "react";
import RitaTalking from "../components/RitaTalking";
import Layout from "../components/Layout";
import ButtonSkip from "../components/ButtonSkip";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <Layout>
      <RitaTalking
        message={"the page you're trying to access does not exist"}
      />
      <ButtonSkip onHandleSkip={() => navigate(-1)} title="back" />
    </Layout>
  );
}
