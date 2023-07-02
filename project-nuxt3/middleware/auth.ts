export default defineNuxtRouteMiddleware((to, from) => {
  console.log(1);

  // 사용자 인증 함수 (인증이 완료되었다면 ture 리턴)
  const isAuthenticated = () => {
    let temp = false;
    // 인증 과정 실행
    return temp;
  };
  if (isAuthenticated() === false) {
    return navigateTo("/");
  } else {
    console.log("to", to);
    console.log("to", from);
  }
});
