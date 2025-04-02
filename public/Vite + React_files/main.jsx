import.meta.env = {"BASE_URL": "/", "DEV": true, "MODE": "development", "PROD": false, "SSR": false, "VITE_CLERK_PUBLISHABLE_KEY": "pk_test_ZmluZS1wYW5nb2xpbi05OC5jbGVyay5hY2NvdW50cy5kZXYk"};import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=b319bc69"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
import __vite__cjsImport1_react from "/node_modules/.vite/deps/react.js?v=b319bc69"; const StrictMode = __vite__cjsImport1_react["StrictMode"];
import __vite__cjsImport2_reactDom_client from "/node_modules/.vite/deps/react-dom_client.js?v=b319bc69"; const createRoot = __vite__cjsImport2_reactDom_client["createRoot"];
import "/src/index.css?t=1743565469475";
import App from "/src/App.jsx?t=1743565469475";
import { ClerkProvider } from "/node_modules/.vite/deps/@clerk_clerk-react.js?v=b319bc69";
import { createBrowserRouter, RouterProvider } from "/node_modules/.vite/deps/react-router.js?v=b319bc69";
import ErrorComponent from "/components/ErrorComponent.jsx";
import SignInPage from "/pages/SignInPage.jsx";
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
if (!PUBLISHABLE_KEY) {
  throw new Error("Add your Clerk Publishable Key to the .env file");
}
let router = createBrowserRouter(
  [
    {
      path: "/",
      element: /* @__PURE__ */ jsxDEV(App, {}, void 0, false, {
        fileName: "/Users/notrushi/Practice/Dashboard02/dashboard/src/main.jsx",
        lineNumber: 19,
        columnNumber: 12
      }, this),
      errorElement: /* @__PURE__ */ jsxDEV(ErrorComponent, {}, void 0, false, {
        fileName: "/Users/notrushi/Practice/Dashboard02/dashboard/src/main.jsx",
        lineNumber: 20,
        columnNumber: 17
      }, this)
    },
    {
      path: "/SignIn",
      element: /* @__PURE__ */ jsxDEV(SignInPage, {}, void 0, false, {
        fileName: "/Users/notrushi/Practice/Dashboard02/dashboard/src/main.jsx",
        lineNumber: 24,
        columnNumber: 12
      }, this),
      errorElement: /* @__PURE__ */ jsxDEV(ErrorComponent, {}, void 0, false, {
        fileName: "/Users/notrushi/Practice/Dashboard02/dashboard/src/main.jsx",
        lineNumber: 25,
        columnNumber: 17
      }, this)
    }
  ]
);
createRoot(document.getElementById("root")).render(
  /* @__PURE__ */ jsxDEV(StrictMode, { children: /* @__PURE__ */ jsxDEV(
    ClerkProvider,
    {
      publishableKey: PUBLISHABLE_KEY,
      afterSignOutUrl: "/",
      appearance: {
        layout: {
          animations: "true",
          unsafe_disableDevelopmentModeWarnings: "true",
          termsPageUrl: "https://clerk.com/terms"
        }
      },
      children: /* @__PURE__ */ jsxDEV(RouterProvider, { router }, void 0, false, {
        fileName: "/Users/notrushi/Practice/Dashboard02/dashboard/src/main.jsx",
        lineNumber: 40,
        columnNumber: 7
      }, this)
    },
    void 0,
    false,
    {
      fileName: "/Users/notrushi/Practice/Dashboard02/dashboard/src/main.jsx",
      lineNumber: 31,
      columnNumber: 5
    },
    this
  ) }, void 0, false, {
    fileName: "/Users/notrushi/Practice/Dashboard02/dashboard/src/main.jsx",
    lineNumber: 30,
    columnNumber: 3
  }, this)
);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6IkFBa0JhO0FBbEJiLFNBQVNBLGtCQUFrQjtBQUMzQixTQUFTQyxrQkFBa0I7QUFDM0IsT0FBTztBQUNQLE9BQU9DLFNBQVM7QUFDaEIsU0FBU0MscUJBQXFCO0FBQzlCLFNBQVNDLHFCQUFxQkMsc0JBQXNCO0FBQ3BELE9BQU9DLG9CQUFvQjtBQUMzQixPQUFPQyxnQkFBZ0I7QUFFdkIsTUFBTUMsa0JBQWtCQyxZQUFZQyxJQUFJQztBQUV4QyxJQUFJLENBQUNILGlCQUFpQjtBQUNwQixRQUFNLElBQUlJLE1BQU0saURBQWlEO0FBQ25FO0FBRUEsSUFBSUMsU0FBU1Q7QUFBQUEsRUFBb0I7QUFBQSxJQUMvQjtBQUFBLE1BQ0VVLE1BQU07QUFBQSxNQUNOQyxTQUFTLHVCQUFDLFNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUFJO0FBQUEsTUFDYkMsY0FBYyx1QkFBQyxvQkFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQWU7QUFBQSxJQUMvQjtBQUFBLElBQ0E7QUFBQSxNQUNFRixNQUFNO0FBQUEsTUFDTkMsU0FBUyx1QkFBQyxnQkFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQVc7QUFBQSxNQUNwQkMsY0FBYyx1QkFBQyxvQkFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQWU7QUFBQSxJQUMvQjtBQUFBLEVBQUM7QUFDRjtBQUVEZixXQUFXZ0IsU0FBU0MsZUFBZSxNQUFNLENBQUMsRUFBRUM7QUFBQUEsRUFDMUMsdUJBQUMsY0FDQztBQUFBLElBQUM7QUFBQTtBQUFBLE1BQWMsZ0JBQWdCWDtBQUFBQSxNQUFpQixpQkFBZ0I7QUFBQSxNQUNoRSxZQUFZO0FBQUEsUUFDVlksUUFBUTtBQUFBLFVBQ05DLFlBQVk7QUFBQSxVQUNaQyx1Q0FBdUM7QUFBQSxVQUN2Q0MsY0FBYztBQUFBLFFBQ2hCO0FBQUEsTUFDRjtBQUFBLE1BRUUsaUNBQUMsa0JBQWUsVUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUErQjtBQUFBO0FBQUEsSUFUakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBVUEsS0FYRjtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBWUE7QUFDRiIsIm5hbWVzIjpbIlN0cmljdE1vZGUiLCJjcmVhdGVSb290IiwiQXBwIiwiQ2xlcmtQcm92aWRlciIsImNyZWF0ZUJyb3dzZXJSb3V0ZXIiLCJSb3V0ZXJQcm92aWRlciIsIkVycm9yQ29tcG9uZW50IiwiU2lnbkluUGFnZSIsIlBVQkxJU0hBQkxFX0tFWSIsImltcG9ydCIsImVudiIsIlZJVEVfQ0xFUktfUFVCTElTSEFCTEVfS0VZIiwiRXJyb3IiLCJyb3V0ZXIiLCJwYXRoIiwiZWxlbWVudCIsImVycm9yRWxlbWVudCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJyZW5kZXIiLCJsYXlvdXQiLCJhbmltYXRpb25zIiwidW5zYWZlX2Rpc2FibGVEZXZlbG9wbWVudE1vZGVXYXJuaW5ncyIsInRlcm1zUGFnZVVybCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlcyI6WyJtYWluLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTdHJpY3RNb2RlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBjcmVhdGVSb290IH0gZnJvbSBcInJlYWN0LWRvbS9jbGllbnRcIjtcbmltcG9ydCBcIi4vaW5kZXguY3NzXCI7XG5pbXBvcnQgQXBwIGZyb20gXCIuL0FwcC5qc3hcIjtcbmltcG9ydCB7IENsZXJrUHJvdmlkZXIgfSBmcm9tIFwiQGNsZXJrL2NsZXJrLXJlYWN0XCI7XG5pbXBvcnQgeyBjcmVhdGVCcm93c2VyUm91dGVyLCBSb3V0ZXJQcm92aWRlciB9IGZyb20gXCJyZWFjdC1yb3V0ZXJcIjtcbmltcG9ydCBFcnJvckNvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnRzL0Vycm9yQ29tcG9uZW50LmpzeCdcbmltcG9ydCBTaWduSW5QYWdlIGZyb20gXCIuLi9wYWdlcy9TaWduSW5QYWdlLmpzeFwiO1xuXG5jb25zdCBQVUJMSVNIQUJMRV9LRVkgPSBpbXBvcnQubWV0YS5lbnYuVklURV9DTEVSS19QVUJMSVNIQUJMRV9LRVk7XG5cbmlmICghUFVCTElTSEFCTEVfS0VZKSB7XG4gIHRocm93IG5ldyBFcnJvcihcIkFkZCB5b3VyIENsZXJrIFB1Ymxpc2hhYmxlIEtleSB0byB0aGUgLmVudiBmaWxlXCIpO1xufVxuXG5sZXQgcm91dGVyID0gY3JlYXRlQnJvd3NlclJvdXRlcihbXG4gIHtcbiAgICBwYXRoOiBcIi9cIixcbiAgICBlbGVtZW50OiA8QXBwIC8+LFxuICAgIGVycm9yRWxlbWVudDogPEVycm9yQ29tcG9uZW50IC8+LFxuICB9LFxuICB7XG4gICAgcGF0aDogXCIvU2lnbkluXCIsXG4gICAgZWxlbWVudDogPFNpZ25JblBhZ2UgLz4sXG4gICAgZXJyb3JFbGVtZW50OiA8RXJyb3JDb21wb25lbnQgLz5cbiAgfVxuXSk7XG5cbmNyZWF0ZVJvb3QoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyb290XCIpKS5yZW5kZXIoXG4gIDxTdHJpY3RNb2RlPlxuICAgIDxDbGVya1Byb3ZpZGVyIHB1Ymxpc2hhYmxlS2V5PXtQVUJMSVNIQUJMRV9LRVl9IGFmdGVyU2lnbk91dFVybD1cIi9cIlxuICAgIGFwcGVhcmFuY2U9e3tcbiAgICAgIGxheW91dDoge1xuICAgICAgICBhbmltYXRpb25zOiBcInRydWVcIixcbiAgICAgICAgdW5zYWZlX2Rpc2FibGVEZXZlbG9wbWVudE1vZGVXYXJuaW5nczogXCJ0cnVlXCIsXG4gICAgICAgIHRlcm1zUGFnZVVybDogJ2h0dHBzOi8vY2xlcmsuY29tL3Rlcm1zJ1xuICAgICAgfVxuICAgIH19XG4gICAgPlxuICAgICAgPFJvdXRlclByb3ZpZGVyIHJvdXRlcj17cm91dGVyfSAvPlxuICAgIDwvQ2xlcmtQcm92aWRlcj5cbiAgPC9TdHJpY3RNb2RlPlxuKTtcbiJdLCJmaWxlIjoiL1VzZXJzL25vdHJ1c2hpL1ByYWN0aWNlL0Rhc2hib2FyZDAyL2Rhc2hib2FyZC9zcmMvbWFpbi5qc3gifQ==