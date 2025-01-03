import {
  _ as B,
  f as n,
  o as t,
  g as l,
  h as a,
  w as e,
  i as _,
  t as u,
  v as c,
  F as v,
  k,
  p as y,
  A as N,
  l as m,
} from "./app-81c86c8f.js";
const S = {
    head: { title: "All Categories" },
    data: () => ({ loading: !0, categories: [{}, {}, {}, {}] }),
    mounted: () => {},
    methods: {},
    async created() {
      const s = await this.call_api("get", "all-categories");
      s.data.success && ((this.categories = s.data.data), (this.loading = !1));
    },
  },
  V = { class: "pb-6" },
  A = { class: "mb-7 mt-4" },
  F = { key: 0 },
  E = ["src", "alt"],
  z = { class: "mb-3" },
  D = { key: 0 },
  L = { key: 0, class: "" };
function T(s, g, q, G, H, I) {
  const C = n("v-skeleton-loader"),
    i = n("router-link"),
    d = n("v-col"),
    p = n("v-hover"),
    h = n("v-row"),
    x = n("v-card"),
    b = n("v-container");
  return (
    t(),
    l("div", V, [
      a(b, null, {
        default: e(() => [
          _("h1", A, u(s.$t("all_categories")), 1),
          s.categories.length
            ? (t(),
              c(
                h,
                { key: 0 },
                {
                  default: e(() => [
                    (t(!0),
                    l(
                      v,
                      null,
                      k(
                        s.categories,
                        (o, w) => (
                          t(),
                          c(
                            d,
                            { cols: "12", md: "6", key: w },
                            {
                              default: e(() => [
                                s.loading
                                  ? (t(),
                                    l("div", F, [
                                      a(C, {
                                        type: "image",
                                        class: "",
                                        height: "235",
                                      }),
                                    ]))
                                  : (t(),
                                    c(
                                      x,
                                      {
                                        key: 1,
                                        outlined: "",
                                        class: "pa-6",
                                        variant: "outlined",
                                      },
                                      {
                                        default: e(() => [
                                          a(
                                            h,
                                            { align: "center" },
                                            {
                                              default: e(() => [
                                                a(
                                                  d,
                                                  { cols: "4" },
                                                  {
                                                    default: e(() => [
                                                      a(
                                                        i,
                                                        {
                                                          to: {
                                                            name: "Category",
                                                            params: {
                                                              categorySlug:
                                                                o.slug,
                                                            },
                                                          },
                                                          class: "text-reset",
                                                        },
                                                        {
                                                          default: e(() => [
                                                            _(
                                                              "img",
                                                              {
                                                                class:
                                                                  "img-fluid",
                                                                src: o.banner,
                                                                alt: o.name,
                                                                onError:
                                                                  g[0] ||
                                                                  (g[0] = (r) =>
                                                                    s.imageFallback(
                                                                      r
                                                                    )),
                                                              },
                                                              null,
                                                              40,
                                                              E
                                                            ),
                                                          ]),
                                                          _: 2,
                                                        },
                                                        1032,
                                                        ["to"]
                                                      ),
                                                    ]),
                                                    _: 2,
                                                  },
                                                  1024
                                                ),
                                                a(
                                                  d,
                                                  { cols: "8" },
                                                  {
                                                    default: e(() => [
                                                      _("h3", z, [
                                                        a(
                                                          i,
                                                          {
                                                            to: {
                                                              name: "Category",
                                                              params: {
                                                                categorySlug:
                                                                  o.slug,
                                                              },
                                                            },
                                                            class: "text-reset",
                                                          },
                                                          {
                                                            default: e(() => [
                                                              y(u(o.name), 1),
                                                            ]),
                                                            _: 2,
                                                          },
                                                          1032,
                                                          ["to"]
                                                        ),
                                                      ]),
                                                      o.children.data.length
                                                        ? (t(),
                                                          l("div", D, [
                                                            (t(!0),
                                                            l(
                                                              v,
                                                              null,
                                                              k(
                                                                o.children.data,
                                                                (r, f) => (
                                                                  t(),
                                                                  c(
                                                                    p,
                                                                    { key: f },
                                                                    {
                                                                      default:
                                                                        e(
                                                                          ({
                                                                            hover:
                                                                              J,
                                                                          }) => [
                                                                            a(
                                                                              p,
                                                                              null,
                                                                              {
                                                                                default:
                                                                                  e(
                                                                                    ({
                                                                                      hover:
                                                                                        $,
                                                                                    }) => [
                                                                                      a(
                                                                                        i,
                                                                                        {
                                                                                          class:
                                                                                            N(
                                                                                              [
                                                                                                "text-reset me-1 opacity-80 category-item-text",
                                                                                                {
                                                                                                  "primary--text text-decoration-underline":
                                                                                                    $,
                                                                                                },
                                                                                              ]
                                                                                            ),
                                                                                          to: {
                                                                                            name: "Category",
                                                                                            params:
                                                                                              {
                                                                                                categorySlug:
                                                                                                  r.slug,
                                                                                              },
                                                                                          },
                                                                                        },
                                                                                        {
                                                                                          default:
                                                                                            e(
                                                                                              () => [
                                                                                                y(
                                                                                                  u(
                                                                                                    r.name
                                                                                                  ),
                                                                                                  1
                                                                                                ),
                                                                                                f +
                                                                                                  1 !==
                                                                                                o
                                                                                                  .children
                                                                                                  .data
                                                                                                  .length
                                                                                                  ? (t(),
                                                                                                    l(
                                                                                                      "span",
                                                                                                      L,
                                                                                                      ","
                                                                                                    ))
                                                                                                  : m(
                                                                                                      "",
                                                                                                      !0
                                                                                                    ),
                                                                                              ]
                                                                                            ),
                                                                                          _: 2,
                                                                                        },
                                                                                        1032,
                                                                                        [
                                                                                          "class",
                                                                                          "to",
                                                                                        ]
                                                                                      ),
                                                                                    ]
                                                                                  ),
                                                                                _: 2,
                                                                              },
                                                                              1024
                                                                            ),
                                                                          ]
                                                                        ),
                                                                      _: 2,
                                                                    },
                                                                    1024
                                                                  )
                                                                )
                                                              ),
                                                              128
                                                            )),
                                                          ]))
                                                        : m("", !0),
                                                    ]),
                                                    _: 2,
                                                  },
                                                  1024
                                                ),
                                              ]),
                                              _: 2,
                                            },
                                            1024
                                          ),
                                        ]),
                                        _: 2,
                                      },
                                      1024
                                    )),
                              ]),
                              _: 2,
                            },
                            1024
                          )
                        )
                      ),
                      128
                    )),
                  ]),
                  _: 1,
                }
              ))
            : m("", !0),
        ]),
        _: 1,
      }),
    ])
  );
}
const M = B(S, [["render", T]]);
export { M as default };
