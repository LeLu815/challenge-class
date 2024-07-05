"use client";

import { ComponentProps } from "react";

import Button from "@/components/Button";
import Input from "@/components/Input";
import Page from "@/components/Page";
import { supabase } from "@/context/supabase.context";

function SignUpPage() {
  const handleSubmit: ComponentProps<"form">["onSubmit"] = async (e) => {
    e.preventDefault();
    const { data, error } = await supabase.auth.signUp({
      email: "example1@email.com",
      password: "example-password",
      options: {
        data: {
          nickname: "튜터",
        },
      },
    });

    console.log(data, error);
  };

  return (
    <Page title="회원가입" width="sm">
      <form
        onSubmit={handleSubmit}
        action=""
        className="max-w-sm mx-auto flex flex-col gap-y-8"
      >
        <div>
          <Input label="아이디" required />
          <Input label="비밀번호" required />
          <Input label="비밀번호 확인" required />
        </div>
        <Button type="submit">회원가입하기</Button>
      </form>
    </Page>
  );
}

export default SignUpPage;
