import {
  _ as h,
  f as o,
  o as m,
  g as u,
  i as s,
  t as l,
  h as r,
  w as i,
  p as _,
} from "./app-81c86c8f.js";
const f = {
    data: () => ({
      loading: !0,
      currentPage: 1,
      lastPage: 1,
      earningsList: [],
    }),
    computed: {
      headers() {
        return [
          {
            title: this.$i18n.t("code"),
            align: "start",
            sortable: !1,
            value: "code",
          },
          {
            title: this.$i18n.t("date"),
            sortable: !1,
            align: "start",
            value: "date",
          },
          {
            title: this.$i18n.t("amount"),
            sortable: !1,
            align: "start",
            value: "amount",
          },
          {
            title: this.$i18n.t("options"),
            sortable: !1,
            align: "center",
            value: "options",
          },
        ];
      },
    },
    methods: {
      async getEarningsList(t) {
        this.loading = !0;
        const a = await this.call_api(
          "get",
          `delivery-boy/earnings-list?page=${t}`
        );
        a.status == 200
          ? ((this.earningsList = a.data.data),
            (this.lastPage = a.data.meta.last_page),
            (this.currentPage = a.data.meta.current_page))
          : this.snack({
              message: this.$i18n.t("something_went_wrong"),
              color: "red",
            }),
          (this.loading = !1);
      },
      openOrderDetails(t) {
        this.$router.push({
          name: "DeliveryboyOrderDetails",
          params: { code: t },
        });
      },
    },
    created() {
      let t = this.$route.query.page || this.currentPage;
      this.getEarningsList(t);
    },
  },
  v = { class: "ps-lg-7 pt-4" },
  b = { class: "fs-24 fw-700 opacity-80 mb-5 mt-3" },
  y = { class: "d-block fw-600" },
  $ = ["onClick"],
  k = s("i", { class: "las la-bars" }, null, -1),
  w = [k],
  P = { class: "text-start" };
function L(t, a, V, C, D, n) {
  const c = o("v-btn"),
    d = o("v-data-table"),
    g = o("v-pagination");
  return (
    m(),
    u("div", v, [
      s("h1", b, l(t.$t("earning_history")), 1),
      s("div", null, [
        r(
          d,
          {
            headers: n.headers,
            items: t.earningsList,
            class: "border px-4 pt-3",
            "hide-default-footer": "",
            "item-class": "c-pointer",
          },
          {
            "item.code": i(({ item: e }) => [
              r(
                c,
                {
                  onClick: (p) => n.openOrderDetails(e.code),
                  variant: "flat",
                  class: "px-2 text-primary",
                },
                { default: i(() => [_(l(e.code), 1)]), _: 2 },
                1032,
                ["onClick"]
              ),
            ]),
            "item.amount": i(({ item: e }) => [
              s("span", y, l(t.format_price(e.amount)), 1),
            ]),
            "item.options": i(({ item: e }) => [
              s(
                "a",
                {
                  onClick: (p) => n.openOrderDetails(e.code),
                  small: "",
                  class:
                    "px-2 btn btn-soft-info btn-icon btn-circle btn-sm hov-svg-white",
                },
                w,
                8,
                $
              ),
            ]),
            _: 2,
          },
          1032,
          ["headers", "items"]
        ),
      ]),
      s("div", P, [
        r(
          g,
          {
            modelValue: t.currentPage,
            "onUpdate:modelValue": [
              a[0] || (a[0] = (e) => (t.currentPage = e)),
              n.getEarningsList,
            ],
            length: t.lastPage,
            "prev-icon": "las la-angle-left",
            "next-icon": "las la-angle-right",
            "total-visible": 7,
            elevation: "0",
            class: "my-4",
          },
          null,
          8,
          ["modelValue", "onUpdate:modelValue", "length"]
        ),
      ]),
    ])
  );
}
const E = h(f, [["render", L]]);
export { E as default };
