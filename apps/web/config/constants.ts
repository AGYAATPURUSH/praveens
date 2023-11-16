/**
 * This file provides app wide constants
 */
import { UIConstants } from "@courselit/common-models";
const { permissions } = UIConstants;

export default {
    domainNameForSingleTenancy: "main",
    dbConnectionString:
        process.env.DB_CONNECTION_STRING ||
        `mongodb://localhost/${
            process.env.NODE_ENV === "test" ? "test" : "app"
        }`,

    // product types
    course: "course",
    download: "download",
    blog: "blog",

    // Content types
    text: "text",
    audio: "audio",
    video: "video",
    pdf: "pdf",
    quiz: "quiz",
    file: "file",
    embed: "embed",

    // media access type
    publicMedia: "public",
    privateMedia: "private",

    // Content privacy types
    unlisted: "unlisted",
    open: "public",

    // Cost types
    costFree: "free",
    costEmail: "email",
    costPaid: "paid",

    // Pagination config
    itemsPerPage: process.env.ITEMS_PER_PAGE ? +process.env.ITEMS_PER_PAGE : 10,
    defaultOffset: 1,
    blogPostSnippetLength: 135,

    // Payment methods
    paypal: "paypal",
    stripe: "stripe",
    paytm: "paytm",
    none: "",

    // transaction statuses
    transactionInitiated: "initiated",
    transactionSuccess: "success",
    transactionFailed: "failed",

    // permissions for role-based access
    permissions,

    // entry point for the user
    leadWebsite: "website",
    leadNewsletter: "newsletter",
    leadDownload: "download",

    // log levels
    severityError: "error",
    severityInfo: "info",
    severityWarn: "warn",

    // limits
    mediaRecordsPerPage: 10,

    // page types
    product: "product",
    site: "site",
    blogPage: "blog",

    // typography
    typeface: "Roboto",

    // Download links settings
    downLoadLinkExpiresInDays: 2,
    downLoadLinkLength: 128,

    // mail types
    mailBroadcast: "broadcast",
    mailSequence: "sequence",

    // user filters
    userFilters: [
        "email",
        "product",
        "lastActive",
        "signedUp",
        "subscription",
        "tag",
        "permission",
    ],

    // acceptable currency codes for payments
    currencyISOCodes: [
        "afn",
        "eur",
        "all",
        "dzd",
        "usd",
        "aoa",
        "xcd",
        "ars",
        "amd",
        "awg",
        "aud",
        "azn",
        "bsd",
        "bhd",
        "bdt",
        "bbd",
        "byn",
        "bzd",
        "xof",
        "bmd",
        "inr",
        "btn",
        "bob",
        "bov",
        "bam",
        "bwp",
        "nok",
        "brl",
        "bnd",
        "bgn",
        "bif",
        "cve",
        "khr",
        "xaf",
        "cad",
        "kyd",
        "clp",
        "clf",
        "cny",
        "cop",
        "cou",
        "kmf",
        "cdf",
        "nzd",
        "crc",
        "hrk",
        "cup",
        "cuc",
        "ang",
        "czk",
        "dkk",
        "djf",
        "dop",
        "egp",
        "svc",
        "ern",
        "etb",
        "fkp",
        "fjd",
        "xpf",
        "gmd",
        "gel",
        "ghs",
        "gip",
        "gtq",
        "gbp",
        "gnf",
        "gyd",
        "htg",
        "hnl",
        "hkd",
        "huf",
        "isk",
        "idr",
        "xdr",
        "irr",
        "iqd",
        "ils",
        "jmd",
        "jpy",
        "jod",
        "kzt",
        "kes",
        "kpw",
        "krw",
        "kwd",
        "kgs",
        "lak",
        "lbp",
        "lsl",
        "zar",
        "lrd",
        "lyd",
        "chf",
        "mop",
        "mkd",
        "mga",
        "mwk",
        "myr",
        "mvr",
        "mru",
        "mur",
        "xua",
        "mxn",
        "mxv",
        "mdl",
        "mnt",
        "mad",
        "mzn",
        "mmk",
        "nad",
        "npr",
        "nio",
        "ngn",
        "omr",
        "pkr",
        "pab",
        "pgk",
        "pyg",
        "pen",
        "php",
        "pln",
        "qar",
        "ron",
        "rub",
        "rwf",
        "shp",
        "wst",
        "stn",
        "sar",
        "rsd",
        "scr",
        "sll",
        "sgd",
        "xsu",
        "sbd",
        "sos",
        "ssp",
        "lkr",
        "sdg",
        "srd",
        "szl",
        "sek",
        "che",
        "chw",
        "syp",
        "twd",
        "tjs",
        "tzs",
        "thb",
        "top",
        "ttd",
        "tnd",
        "try",
        "tmt",
        "ugx",
        "uah",
        "aed",
        "usn",
        "uyu",
        "uyi",
        "uyw",
        "uzs",
        "vuv",
        "ves",
        "vnd",
        "yer",
        "zmw",
        "zwl",
        "xba",
        "xbb",
        "xbc",
        "xbd",
        "xts",
        "xxx",
        "xau",
        "xpd",
        "xpt",
        "xag",
    ],
} as const;