from __future__ import annotations

import json
from pathlib import Path

import matplotlib.pyplot as plt
import numpy as np

ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "docs" / "keyword-gap-data"
RAW = OUTPUT / "raw"
CHARTS = OUTPUT / "charts"

plt.rcParams.update({
    "font.family": "DejaVu Sans",
    "font.size": 10,
    "axes.titleweight": "bold",
    "axes.labelcolor": "#171715",
    "text.color": "#171715",
    "xtick.color": "#171715",
    "ytick.color": "#171715",
})


def load_payload(path: Path) -> dict:
    outer = json.loads(path.read_text())
    return json.loads(outer["content"][0]["text"])


def save(fig: plt.Figure, name: str) -> None:
    CHARTS.mkdir(parents=True, exist_ok=True)
    fig.savefig(CHARTS / name, dpi=180, bbox_inches="tight", facecolor="#f7f5ef")
    plt.close(fig)


def market_demand_chart() -> None:
    markets = ["Croatia", "Serbia", "Slovenia", "Bosnia &\nHerzegovina"]
    seo = [700, 700, 500, 150]
    ai = [30, 50, 90, 10]
    x = np.arange(len(markets))

    fig, axes = plt.subplots(1, 2, figsize=(11.2, 4.7), facecolor="#f7f5ef")
    for ax, values, title, color in [
        (axes[0], seo, "Core SEO demand: ‘SEO optimizacija’", "#e9e1c9"),
        (axes[1], ai, "AI-search demand: ‘AI SEO’", "#476089"),
    ]:
        ax.set_facecolor("#f7f5ef")
        bars = ax.bar(x, values, color=color, width=.58)
        ax.set_title(title, loc="left", pad=14)
        ax.set_xticks(x, markets)
        ax.set_ylabel("Monthly search volume")
        ax.spines[["top", "right", "left"]].set_visible(False)
        ax.grid(axis="y", color="#ddd8ca", linewidth=.8)
        ax.set_axisbelow(True)
        for bar, value in zip(bars, values):
            ax.text(bar.get_x() + bar.get_width() / 2, value + max(values) * .035, f"{value:,}", ha="center", va="bottom", fontweight="bold")
    fig.suptitle("Balkan search demand is service-led; AI-search language is still emerging", x=.06, ha="left", fontsize=14, fontweight="bold")
    fig.text(.06, .02, "Ahrefs Keywords Explorer, September 2026. Country databases are directional estimates.", fontsize=8, color="#54534f")
    fig.subplots_adjust(top=.79, bottom=.22, left=.08, right=.98, wspace=.28)
    save(fig, "balkan-market-demand.png")


def opportunity_matrix_chart() -> None:
    opportunities = [
        ("Croatia: SEO optimizacija", 700, 0, "Balkans"),
        ("Serbia: SEO optimizacija", 700, 0, "Balkans"),
        ("Slovenia: AI SEO", 90, 0, "Balkans"),
        ("UK: SEO consulting services", 1000, 10, "English Europe"),
        ("UK: AI SEO services", 1900, 9, "English Europe"),
        ("US: AI SEO services", 4900, 18, "US"),
        ("US: technical SEO services", 8800, 4, "US"),
        ("US: GEO services", 3000, 47, "US"),
        ("Germany: SEO Beratung", 6100, 3, "Germany"),
        ("Germany: KI SEO Agentur", 1000, 1, "Germany"),
    ]
    colors = {"Balkans": "#476089", "English Europe": "#809a7b", "US": "#c4804d", "Germany": "#87656b"}
    label_positions = {
        "Croatia: SEO optimizacija": (-45, 16, "right"),
        "Serbia: SEO optimizacija": (9, 4, "left"),
        "Slovenia: AI SEO": (10, 10, "left"),
        "UK: SEO consulting services": (10, 15, "left"),
        "UK: AI SEO services": (10, 4, "left"),
        "US: AI SEO services": (10, -14, "left"),
        "US: technical SEO services": (-12, -20, "right"),
        "US: GEO services": (10, 10, "left"),
        "Germany: SEO Beratung": (10, 12, "left"),
        "Germany: KI SEO Agentur": (10, -16, "left"),
    }

    fig, ax = plt.subplots(figsize=(10.8, 6.2), facecolor="#f7f5ef")
    ax.set_facecolor("#f7f5ef")
    for name, volume, kd, market in opportunities:
        ax.scatter(volume, kd, s=100, c=colors[market], edgecolors="#171715", linewidths=.35, zorder=3)
        x_offset, y_offset, horizontal_alignment = label_positions[name]
        ax.annotate(name, (volume, kd), xytext=(x_offset, y_offset), textcoords="offset points", fontsize=8.5, va="center", ha=horizontal_alignment)
    ax.set_xscale("log")
    ax.set_xlim(55, 14000)
    ax.set_ylim(-4, 70)
    ax.set_xlabel("Monthly search volume (log scale)")
    ax.set_ylabel("Ahrefs Keyword Difficulty")
    ax.set_title("Service opportunities by market: volume versus ranking difficulty", loc="left", pad=14, fontsize=14, fontweight="bold")
    ax.grid(color="#ddd8ca", linewidth=.8)
    ax.spines[["top", "right"]].set_visible(False)
    handles = [plt.Line2D([0], [0], marker="o", color="w", markerfacecolor=color, markeredgecolor="#171715", markersize=8, label=market) for market, color in colors.items()]
    ax.legend(handles=handles, frameon=False, loc="upper right")
    fig.text(.125, .015, "Lower placement indicates a lower published difficulty score. Treat sparse local-market difficulty as directional.", fontsize=8, color="#54534f")
    fig.subplots_adjust(bottom=.15, left=.12, right=.97, top=.88)
    save(fig, "service-opportunity-matrix.png")


def category(page_type: str | None) -> str:
    if not page_type:
        return "Other editorial"
    if "Listicle" in page_type or "Roundup" in page_type or "Comparisons" in page_type:
        return "Commercial listicles"
    if "Tutorial" in page_type or "How_to" in page_type or "Study" in page_type:
        return "Guides & research"
    if "Service_Page" in page_type:
        return "Service pages"
    if "Homepage" in page_type or "About_Page" in page_type or "Contact_Page" in page_type:
        return "Core pages"
    return "Other editorial"


def competitor_pattern_chart() -> None:
    sources = {
        "Grow & Convert": "growandconvert-top-pages.json",
        "Omniscient": "beomniscient-top-pages.json",
        "Seer Interactive": "seerinteractive-top-pages.json",
    }
    categories = ["Commercial listicles", "Guides & research", "Service pages", "Core pages", "Other editorial"]
    colors = ["#c4804d", "#476089", "#809a7b", "#87656b", "#c5bdac"]
    totals: dict[str, list[int]] = {name: [0] * len(categories) for name in sources}

    for name, filename in sources.items():
        for page in load_payload(RAW / filename)["pages"]:
            item = category(page.get("page_type"))
            totals[name][categories.index(item)] += page.get("sum_traffic", 0) or 0

    fig, ax = plt.subplots(figsize=(11.2, 5.8), facecolor="#f7f5ef")
    ax.set_facecolor("#f7f5ef")
    y = np.arange(len(sources))
    left = np.zeros(len(sources))
    for index, (label, color) in enumerate(zip(categories, colors)):
        values = np.array([totals[name][index] for name in sources])
        ax.barh(y, values, left=left, label=label, color=color, height=.62)
        left += values
    ax.set_yticks(y, list(sources))
    ax.set_xlabel("Estimated monthly organic traffic across sampled top pages")
    ax.set_title("Competitor playbook: editorial pages, not homepages, carry the opportunity", loc="left", pad=14, fontsize=14, fontweight="bold")
    ax.spines[["top", "right", "left"]].set_visible(False)
    ax.grid(axis="x", color="#ddd8ca", linewidth=.8)
    ax.set_axisbelow(True)
    ax.legend(ncol=3, frameon=False, loc="lower center", bbox_to_anchor=(.5, -0.28), fontsize=8.5)
    fig.text(.125, .02, "Ahrefs Site Explorer top-page exports, US database, September 2026. This is a sampled top-page view, not a full crawl.", fontsize=8, color="#54534f")
    fig.subplots_adjust(bottom=.22, left=.18, right=.98, top=.88)
    save(fig, "competitor-editorial-patterns.png")


if __name__ == "__main__":
    market_demand_chart()
    opportunity_matrix_chart()
    competitor_pattern_chart()
