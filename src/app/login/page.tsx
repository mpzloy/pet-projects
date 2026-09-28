import type {Metadata} from "next";
import Page from "@/shared/components/Page";
import Wrapper from "@/shared/components/Wrapper";
import {LoginForm} from "@/shared/components/login-form";

export const metadata: Metadata = {
  title: "Сторінка авторизації",
  description: "Вхід в систему для доступу до особистого кабінету",
};

function LoginPage() {
  return (
    <Page>
      <Wrapper>
        <div className="flex min-h-svh flex-col items-center justify-center">
          <div className="w-full max-w-sm md:max-w-4xl">
            <LoginForm/>
          </div>
        </div>
      </Wrapper>
    </Page>
  );
}

export default LoginPage;