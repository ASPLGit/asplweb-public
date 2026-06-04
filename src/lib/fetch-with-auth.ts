export async function fetchWithAuth(
  input: RequestInfo,
  init?: RequestInit
) {
  const response =
    await fetch(
      input,
      init
    );

  if (
    response.status ===
    401
  ) {
    window.location.href =
      "/admin/login";
  }

  return response;
}