import InvoiceDocument from "@/features/sales/components/pdf";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { Download } from "lucide-react";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export const DefaultCard = function ({ children: card, dragging }) {
  return _jsxs(
    "div",
    Object.assign(
      {
        className: `react-kanban-card ${dragging ? "react-kanban-card--dragging" : ""}`,
      },
      {
        children: [
          _jsx(
            "span",
            {
              children: _jsxs(
                "div",
                Object.assign(
                  { className: "react-kanban-card__title" },
                  {
                    children: [
                      _jsx(
                        "span",
                        Object.assign(
                          { style: { width: "100%" } },
                          { children: card.title },
                        ),
                        void 0,
                      ),
                      _jsx(
                        "span",
                        Object.assign(
                          {
                            style: { cursor: "pointer", width: "auto" },
                          },
                          {
                            children: _jsx(PDFDownloadLink, {
                              document: _jsx(InvoiceDocument, {}),
                              fileName: card.title + ".pdf",
                              children: ({ blob, url, loading, error }) =>
                                loading
                                  ? "Loading document..."
                                  : _jsx(Download, {}),
                            }),
                          },
                        ),
                        void 0,
                      ),
                    ],
                  },
                ),
                void 0,
              ),
            },
            void 0,
          ),
          _jsx(
            "div",
            Object.assign(
              { className: "react-kanban-card__description" },
              { children: card.description },
            ),
            void 0,
          ),
        ],
      },
    ),
    void 0,
  );
};
