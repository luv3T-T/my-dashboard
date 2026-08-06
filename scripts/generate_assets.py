# -*- coding: utf-8 -*-
"""Generate placeholder visual assets for the portfolio site."""

import math
import os
import random

import imageio
import numpy as np
from PIL import Image, ImageDraw, ImageFilter, ImageFont


ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
ASSETS = os.path.join(ROOT, "public", "assets")
os.makedirs(ASSETS, exist_ok=True)

GOLD = (201, 164, 92)
GOLD_LIGHT = (227, 201, 130)
GOLD_DARK = (143, 122, 69)
INK = (12, 12, 15)
PANEL = (19, 19, 24)
TEXT = (228, 228, 222)
MUTED = (138, 138, 148)

random.seed(20260806)


def font(size, bold=False):
    path = r"C:\Windows\Fonts\msyhbd.ttc" if bold else r"C:\Windows\Fonts\msyh.ttc"
    return ImageFont.truetype(path, size)


def canvas(w, h, bg=INK):
    img = Image.new("RGB", (w, h), bg)
    d = ImageDraw.Draw(img)
    return img, d


def rounded(d, box, radius, fill=None, outline=None, width=1):
    d.rounded_rectangle(box, radius=radius, fill=fill, outline=outline, width=width)


def make_gradient(w, h, top=(10, 10, 13), bottom=(22, 17, 12)):
    y = np.linspace(0, 1, h)[:, None]
    x = np.linspace(0, 1, w)[None, :]
    mix = (x * 0.35 + y * 0.65)[..., None]
    arr = np.array(top, dtype=float) * (1 - mix) + np.array(bottom, dtype=float) * mix
    return Image.fromarray(arr.astype(np.uint8), "RGB")


def draw_dashboard():
    w, h = 1600, 1000
    img, d = canvas(w * 2, h * 2)
    # header
    d.rectangle([0, 0, w * 2, 92], fill=(14, 14, 18))
    d.text((48, 24), "核心财务指标看板", font=font(42, True), fill=GOLD_LIGHT)
    d.text((48, 78), "TENCENT 00700.HK  ·  NETEASE 09999.HK  ·  2021-2025", font=font(24), fill=MUTED)
    d.rectangle([w * 2 - 380, 38, w * 2 - 180, 58], outline=GOLD, width=2)
    d.text((w * 2 - 360, 36), "全屏查看", font=font(24), fill=GOLD)

    # sidebar
    d.rectangle([0, 92, 230, h * 2], fill=(15, 15, 20))
    labels = ["筛选器", "公司", "年份", "季度", "指标"]
    y = 140
    for i, lb in enumerate(labels):
        d.text((34, y), lb, font=font(28, i == 0), fill=GOLD_LIGHT if i == 0 else TEXT)
        y += 58
    for i in range(4):
        rounded(d, [34, 360 + i * 92, 196, 422 + i * 92], 10, fill=(24, 24, 31), outline=(58, 55, 50), width=1)
        d.text((48, 376 + i * 92), ["腾讯控股 + 网易", "2021 - 2025", "全部季度", "营收 · 净利 · 现金流"][i], font=font(22), fill=MUTED)

    # KPI cards
    cards = [
        ("营业收入", "8,643.92", "亿"),
        ("归母净利润", "2,586.02", "亿"),
        ("经营现金流", "3,537.92", "亿"),
        ("毛利率", "57.3%", ""),
        ("净利率", "29.9%", ""),
    ]
    x = 262
    for label, value, unit in cards:
        rounded(d, [x, 120, x + 248, 230], 14, fill=PANEL, outline=(52, 50, 46), width=1)
        d.text((x + 22, 142), label, font=font(25), fill=MUTED)
        d.text((x + 22, 176), value, font=font(42, True), fill=GOLD_LIGHT)
        d.text((x + 178, 196), unit, font=font(22), fill=MUTED)
        x += 268

    # line charts
    for cx, title in ((262, "营业收入趋势（亿元）"), (908, "归母净利润趋势（亿元）")):
        rounded(d, [cx, 260, cx + 620, 640], 14, fill=PANEL, outline=(52, 50, 46), width=1)
        d.text((cx + 26, 284), title, font=font(28, True), fill=TEXT)
        d.text((cx + 26, 326), "腾讯  /  网易", font=font(20), fill=MUTED)
        left, top, right, bottom = cx + 50, 370, cx + 590, 610
        for gy in range(4):
            yy = top + (bottom - top) * gy / 3
            d.line([left, yy, right, yy], fill=(38, 38, 46), width=1)
        for gx in range(6):
            xx = left + (right - left) * gx / 5
            d.line([xx, top, xx, bottom], fill=(34, 34, 42), width=1)
        pts_a = [(left + (right - left) * i / 10, top + (bottom - top) * (0.42 + 0.32 * math.sin(i * 0.7 + 0.4))) for i in range(11)]
        pts_b = [(left + (right - left) * i / 10, top + (bottom - top) * (0.62 - 0.22 * math.sin(i * 0.55 + 1.2))) for i in range(11)]
        d.line(pts_a, fill=(120, 132, 145), width=5)
        d.line(pts_b, fill=GOLD, width=5)
        for p in pts_a[::2]:
            d.ellipse([p[0] - 7, p[1] - 7, p[0] + 7, p[1] + 7], fill=(120, 132, 145))
        for p in pts_b[::2]:
            d.ellipse([p[0] - 7, p[1] - 7, p[0] + 7, p[1] + 7], fill=GOLD)
        d.rectangle([right - 210, bottom + 12, right - 150, bottom + 24], fill=(120, 132, 145))
        d.text((right - 138, bottom + 6), "腾讯", font=font(20), fill=MUTED)
        d.rectangle([right - 70, bottom + 12, right - 10, bottom + 24], fill=GOLD)
        d.text((right + 2, bottom + 6), "网易", font=font(20), fill=MUTED)

    # bottom: conclusions + dense table
    rounded(d, [262, 670, 700, 940], 14, fill=PANEL, outline=(52, 50, 46), width=1)
    d.text((288, 694), "核心结论", font=font(28, True), fill=TEXT)
    conclusions = [
        "· 腾讯：2025 营收 7,517.66 亿元，同比 +13.86%",
        "· 网易：净利 CAGR 18.96%，净利率升至 30.0%",
        "· 费用：销售费用率双降，研发投入保持强度",
        "· 现金流：OCF 均创五年新高，现金含量良好",
    ]
    yy = 744
    for line in conclusions:
        d.text((288, yy), line, font=font(23), fill=MUTED)
        yy += 44
    d.line([288, 908, 676, 908], fill=(52, 50, 46), width=1)
    d.text((288, 916), "腾讯 / 网易 · 2021—2025", font=font(20), fill=GOLD)

    rounded(d, [730, 670, 1562, 940], 14, fill=PANEL, outline=(52, 50, 46), width=1)
    d.text((756, 694), "年度指标明细", font=font(28, True), fill=TEXT)
    cols = ["公司", "年份", "营收", "净利", "OCF", "毛利率", "净利率"]
    x = 756
    for c in cols:
        d.text((x, 746), c, font=font(22, True), fill=GOLD_LIGHT)
        x += 116
    rows = [
        ("腾讯控股", "2025", "7,517.7", "2,248.4", "3,030.5", "56.2%", "29.9%"),
        ("网易", "2025", "1,126.3", "337.6", "507.4", "64.3%", "30.0%"),
        ("腾讯控股", "2024", "6,602.6", "1,940.7", "2,585.2", "52.9%", "29.4%"),
        ("网易", "2024", "1,053.0", "297.0", "396.8", "62.5%", "28.2%"),
        ("腾讯控股", "2023", "6,090.2", "1,152.2", "2,219.6", "48.1%", "18.9%"),
        ("网易", "2023", "1,034.7", "294.2", "353.3", "60.9%", "28.4%"),
    ]
    for i, row in enumerate(rows):
        yy = 782 + i * 27
        if i % 2 == 0:
            d.rectangle([740, yy - 5, 1578, yy + 22], fill=(24, 24, 31))
        x = 756
        for v in row:
            d.text((x, yy - 6), v, font=font(20), fill=TEXT)
            x += 116

    img = img.resize((w, h), Image.LANCZOS)
    img.save(os.path.join(ASSETS, "project-dashboard.png"))


def draw_dashboard_dense():
    w, h = 1600, 1000
    img, d = canvas(w * 2, h * 2)

    # Header
    d.rectangle([0, 0, w * 2, 184], fill=(14, 14, 18))
    d.text((96, 42), "核心财务指标看板", font=font(74, True), fill=GOLD_LIGHT)
    d.text((96, 150), "TENCENT 00700.HK  ·  NETEASE 09999.HK  ·  2021-2025  ·  单位：人民币亿元", font=font(36), fill=MUTED)
    d.rectangle([2760, 54, 3060, 96], outline=GOLD, width=3)
    d.text((2790, 66), "全屏查看", font=font(34), fill=GOLD)

    # Sidebar
    d.rectangle([0, 184, 460, h * 2], fill=(15, 15, 20))
    labels = ["筛选器", "公司", "年份", "季度", "指标", "口径说明"]
    y = 224
    for i, lb in enumerate(labels):
        d.text((38, y), lb, font=font(40, i == 0 or i == 5), fill=GOLD_LIGHT if i in (0, 5) else TEXT)
        y += 76
    for i in range(4):
        rounded(d, [38, 520 + i * 120, 424, 604 + i * 120], 12, fill=(24, 24, 31), outline=(58, 55, 50), width=2)
        d.text((54, 542 + i * 120), ["腾讯控股 + 网易", "2021 - 2025", "全部季度", "营收 · 净利 · 现金流"][i], font=font(32), fill=MUTED)
    d.line([38, 1090, 424, 1090], fill=(52, 50, 46), width=2)
    notes = ["腾讯行政开支含研发", "网易单列研发费用", "同比 = 当年/上年 - 1", "CAGR = 2021-2025"]
    yy = 1120
    for n in notes:
        d.text((38, yy), "· " + n, font=font(30), fill=MUTED)
        yy += 52

    # KPI cards
    cards = [
        ("营业收入", "8,643.92", "亿", "+13.86%"),
        ("归母净利润", "2,586.02", "亿", "+15.85%"),
        ("经营现金流", "3,537.92", "亿", "+17.23%"),
        ("毛利率", "57.3%", "", "+3.32pp"),
        ("净利率", "29.9%", "", "+1.51pp"),
    ]
    x = 524
    for label, value, unit, trend in cards:
        rounded(d, [x, 240, x + 496, 460], 18, fill=PANEL, outline=(52, 50, 46), width=2)
        d.text((x + 40, 272), label, font=font(40), fill=MUTED)
        d.text((x + 40, 330), value, font=font(70, True), fill=GOLD_LIGHT)
        if unit:
            d.text((x + 320, 368), unit, font=font(34), fill=MUTED)
        d.line([x + 40, 418, x + 456, 418], fill=(52, 50, 46), width=2)
        d.text((x + 40, 428), "2025 同比 " + trend, font=font(30), fill=GOLD)
        x += 520

    # Charts
    chart_specs = [
        ("营业收入趋势（亿元）", (524, 500, 1760, 1280), [5601, 5546, 6090, 6603, 7518], "腾讯", [876, 965, 1035, 1053, 1126], "网易", "2025 +13.86%"),
        ("归母净利润趋势（亿元）", (1800, 500, 3124, 1280), [2248, 1882, 1152, 1941, 2248], "腾讯", [169, 203, 294, 297, 338], "网易", "2023 低点 1,152"),
    ]
    for title, box, ta, ta_name, nb, nb_name, note in chart_specs:
        left, top, right, bottom = box
        rounded(d, [left, top, right, bottom], 18, fill=PANEL, outline=(52, 50, 46), width=2)
        d.text((left + 40, top + 34), title, font=font(44, True), fill=TEXT)
        d.text((left + 40, top + 96), ta_name + "  /  " + nb_name, font=font(32), fill=MUTED)
        gx0, gy0, gx1, gy1 = left + 60, top + 150, right - 50, bottom - 70
        for gy in range(4):
            yy = gy0 + (gy1 - gy0) * gy / 3
            d.line([gx0, yy, gx1, yy], fill=(38, 38, 46), width=2)
        for gx in range(5):
            xx = gx0 + (gx1 - gx0) * gx / 4
            d.line([xx, gy0, xx, gy1], fill=(34, 34, 42), width=2)
            d.text((xx - 18, gy1 + 14), str(2021 + gx), font=font(28), fill=MUTED)
        pts_a = [(gx0 + (gx1 - gx0) * i / 4, gy1 - (gy1 - gy0) * (v - min(ta + nb)) / (max(ta + nb) - min(ta + nb))) for i, v in enumerate(ta)]
        pts_b = [(gx0 + (gx1 - gx0) * i / 4, gy1 - (gy1 - gy0) * (v - min(ta + nb)) / (max(ta + nb) - min(ta + nb))) for i, v in enumerate(nb)]
        d.line(pts_a, fill=(120, 132, 145), width=7)
        d.line(pts_b, fill=GOLD, width=7)
        for i, p in enumerate(pts_a):
            d.ellipse([p[0] - 8, p[1] - 8, p[0] + 8, p[1] + 8], fill=(120, 132, 145))
            d.text((p[0] + 12, p[1] - 34), str(ta[i]), font=font(26), fill=MUTED)
        for i, p in enumerate(pts_b):
            d.ellipse([p[0] - 8, p[1] - 8, p[0] + 8, p[1] + 8], fill=GOLD)
            d.text((p[0] + 12, p[1] - 34), str(nb[i]), font=font(26), fill=GOLD)
        d.rectangle([gx1 - 260, gy0 - 40, gx1 - 200, gy0 - 26], fill=(120, 132, 145))
        d.text((gx1 - 186, gy0 - 46), ta_name, font=font(30), fill=MUTED)
        d.rectangle([gx1 - 120, gy0 - 40, gx1 - 60, gy0 - 26], fill=GOLD)
        d.text((gx1 - 46, gy0 - 46), nb_name, font=font(30), fill=MUTED)
        d.text((left + 40, bottom - 52), note, font=font(30), fill=GOLD_LIGHT)

    # Middle stat strip
    chips = [("5", "年财务数据"), ("2", "家上市公司"), ("20+", "核心财务指标")]
    x = 524
    for value, label in chips:
        rounded(d, [x, 1320, x + 520, 1440], 14, fill=(18, 18, 23), outline=(52, 50, 46), width=2)
        d.text((x + 36, 1344), value, font=font(52, True), fill=GOLD_LIGHT)
        d.text((x + 180, 1358), label, font=font(32), fill=MUTED)
        x += 552

    # Bottom-left conclusions
    rounded(d, [524, 1480, 1400, 1880], 18, fill=PANEL, outline=(52, 50, 46), width=2)
    d.text((564, 1520), "核心结论", font=font(44, True), fill=TEXT)
    conclusions = [
        "腾讯：2025 营收 7,517.66 亿元，同比 +13.86%",
        "网易：净利 CAGR 18.96%，净利率升至 30.0%",
        "毛利率：腾讯 +12.3pp，网易 +10.7pp",
        "费用：销售费用率双降，研发保持强度",
        "现金流：OCF 均创五年新高，现金含量良好",
        "2026Q1：两家营收、净利均同比正增长",
    ]
    yy = 1600
    for line in conclusions:
        d.rectangle([564, yy + 8, 580, yy + 24], fill=GOLD)
        d.text((600, yy), line, font=font(32), fill=MUTED)
        yy += 48
    d.line([564, 1840, 1360, 1840], fill=(52, 50, 46), width=2)
    d.text((564, 1850), "查看完整财务分析报告 →", font=font(32), fill=GOLD)

    # Bottom-right dense table
    rounded(d, [1440, 1480, 3124, 1880], 18, fill=PANEL, outline=(52, 50, 46), width=2)
    d.text((1480, 1520), "年度指标明细", font=font(44, True), fill=TEXT)
    cols = ["公司", "年份", "营收", "净利", "OCF", "毛利率", "净利率"]
    x = 1480
    for c in cols:
        d.text((x, 1590), c, font=font(34, True), fill=GOLD_LIGHT)
        x += 236
    rows = [
        ("腾讯控股", "2025", "7,517.7", "2,248.4", "3,030.5", "56.2%", "29.9%"),
        ("网易", "2025", "1,126.3", "337.6", "507.4", "64.3%", "30.0%"),
        ("腾讯控股", "2024", "6,602.6", "1,940.7", "2,585.2", "52.9%", "29.4%"),
        ("网易", "2024", "1,053.0", "297.0", "396.8", "62.5%", "28.2%"),
        ("腾讯控股", "2023", "6,090.2", "1,152.2", "2,219.6", "48.1%", "18.9%"),
        ("网易", "2023", "1,034.7", "294.2", "353.3", "60.9%", "28.4%"),
        ("腾讯控股", "2022", "5,545.5", "1,882.4", "1,460.9", "43.1%", "33.9%"),
        ("网易", "2022", "965.0", "203.4", "277.1", "54.7%", "21.1%"),
    ]
    for i, row in enumerate(rows):
        yy = 1644 + i * 30
        if i % 2 == 0:
            d.rectangle([1460, yy - 6, 3104, yy + 26], fill=(24, 24, 31))
        x = 1480
        for v in row:
            d.text((x, yy - 6), v, font=font(30), fill=TEXT)
            x += 236
    d.text((1480, 1850), "查看更多年份与季度数据 →", font=font(32), fill=GOLD)

    # Footer status
    d.rectangle([0, 1920, w * 2, h * 2], fill=(12, 12, 15))
    d.line([0, 1920, w * 2, 1920], fill=(52, 50, 46), width=2)
    d.text((96, 1948), "数据更新：2026-08  ·  来源：东方财富F10 / 港交所年报  ·  单位：人民币亿元", font=font(32), fill=MUTED)
    d.text((2560, 1948), "Power BI 动态看板 · 3页 / 37可视化", font=font(32), fill=GOLD)

    img = img.resize((w, h), Image.LANCZOS)
    img.save(os.path.join(ASSETS, "project-dashboard.png"))


def draw_report():
    w, h = 1600, 1000
    img = make_gradient(w * 2, h * 2, (12, 12, 16), (24, 18, 12))
    d = ImageDraw.Draw(img)
    d.line([80, 200, 80, 1900], fill=GOLD, width=3)
    d.text((140, 140), "FINANCIAL ANALYSIS REPORT", font=font(28), fill=GOLD)
    d.text((140, 210), "腾讯控股与网易核心财务分析报告", font=font(76, True), fill=GOLD_LIGHT)
    d.text((140, 330), "2021—2025年度  ·  2026Q1前瞻  ·  单位：人民币亿元", font=font(30), fill=TEXT)
    d.text((140, 400), "围绕收入增速、盈利稳定性、费用控制与现金流走势，形成清晰对比结论。", font=font(30), fill=MUTED)

    cards = [("腾讯控股 2025 营收", "7,517.66", "亿元 · +13.86%"), ("网易 2025 营收", "1,126.26", "亿元 · +6.96%"), ("网易净利 CAGR", "18.96%", "2021-2025")]
    x = 140
    for title, value, note in cards:
        rounded(d, [x, 560, x + 440, 770], 16, fill=(22, 22, 28), outline=(70, 62, 48), width=1)
        d.text((x + 34, 606), title, font=font(26), fill=MUTED)
        d.text((x + 34, 650), value, font=font(56, True), fill=GOLD_LIGHT)
        d.text((x + 34, 726), note, font=font(24), fill=TEXT)
        x += 500

    rounded(d, [140, 840, 2960, 1120], 16, fill=(20, 20, 25), outline=(52, 50, 46), width=1)
    d.text((176, 884), "核心结论", font=font(28, True), fill=TEXT)
    for i, line in enumerate([
        "· 腾讯：规模领先，2025 年增速 13.86%，毛利率提升 12.3pp，但净利率波动更大。",
        "· 网易：盈利稳定，净利率 19.2% → 30.0%，OCF/净利长期处于 1.2—1.5 倍。",
        "· 共同点：销售费用率下降、经营现金流创新高，盈利具备现金支撑。",
    ]):
        d.text((176, 952 + i * 64), line, font=font(28), fill=MUTED)

    for i, line in enumerate([
        "报告结构：分析框架 → 执行摘要 → 收入增速 → 盈利稳定性 → 费用控制 → 现金流 → 2026Q1 → 综合结论 → 附录",
        "数据口径：Power BI 财务数据模型 · 年度 2021-2025 · 季度 2021Q1-2026Q1",
    ]):
        d.text((140, 1250 + i * 60), line, font=font(24), fill=MUTED)

    d.line([140, 1840, 2960, 1840], fill=(62, 58, 50), width=1)
    d.text((140, 1870), "数据来源：D:\\腾讯网易财务分析_2021-2025_PowerBI", font=font(22), fill=MUTED)
    img = img.resize((w, h), Image.LANCZOS)
    img.save(os.path.join(ASSETS, "project-report.png"))


def draw_data():
    w, h = 1600, 1000
    img, d = canvas(w * 2, h * 2)
    d.rectangle([0, 0, w * 2, 96], fill=(15, 15, 20))
    d.text((48, 24), "上市公司财务数据分析", font=font(40, True), fill=GOLD_LIGHT)
    d.text((48, 76), "TENCENT  ·  NETEASE  ·  2021-2025  ·  EXCEL / SQL / POWER BI / AI", font=font(22), fill=MUTED)

    stats = [("5", "年财务数据"), ("2", "家上市公司"), ("20+", "核心财务指标"), ("40%", "AI 提效")]
    x = 80
    for value, label in stats:
        rounded(d, [x, 140, x + 320, 240], 14, fill=PANEL, outline=(52, 50, 46), width=1)
        d.text((x + 24, 162), value, font=font(44, True), fill=GOLD_LIGHT)
        d.text((x + 24, 212), label, font=font(22), fill=MUTED)
        x += 360

    rounded(d, [80, 300, 1200, 720], 14, fill=PANEL, outline=(52, 50, 46), width=1)
    d.text((108, 328), "收入与净利趋势", font=font(28, True), fill=TEXT)
    left, top, right, bottom = 110, 390, 1170, 680
    for gy in range(4):
        yy = top + (bottom - top) * gy / 3
        d.line([left, yy, right, yy], fill=(38, 38, 46), width=1)
    tencent = [5601, 5546, 6090, 6603, 7518]
    netease = [876, 965, 1035, 1053, 1126]
    xw = (right - left) / 4
    pts_t, pts_n = [], []
    for i in range(5):
        xx = left + xw * i
        yt = bottom - (tencent[i] - 5000) / 3000 * (bottom - top)
        yn = bottom - (netease[i] - 500) / 800 * (bottom - top)
        pts_t.append((xx, yt))
        pts_n.append((xx, yn))
        d.text((xx - 14, bottom + 12), str(2021 + i), font=font(20), fill=MUTED)
    d.line(pts_t, fill=GOLD, width=6)
    d.line(pts_n, fill=(120, 132, 145), width=6)
    for p in pts_t:
        d.ellipse([p[0] - 9, p[1] - 9, p[0] + 9, p[1] + 9], fill=GOLD)
    for p in pts_n:
        d.ellipse([p[0] - 9, p[1] - 9, p[0] + 9, p[1] + 9], fill=(120, 132, 145))
    d.rectangle([right - 220, top - 40, right - 160, top - 28], fill=GOLD)
    d.text((right - 148, top - 48), "腾讯", font=font(22), fill=MUTED)
    d.rectangle([right - 90, top - 40, right - 30, top - 28], fill=(120, 132, 145))
    d.text((right - 18, top - 48), "网易", font=font(22), fill=MUTED)

    rounded(d, [1240, 300, 3040, 720], 14, fill=PANEL, outline=(52, 50, 46), width=1)
    d.text((1270, 328), "核心指标表", font=font(28, True), fill=TEXT)
    cols = ["公司", "年份", "营收同比", "净利同比", "毛利率", "净利率", "OCF/净利"]
    x = 1270
    for c in cols:
        d.text((x, 390), c, font=font(22, True), fill=GOLD_LIGHT)
        x += 252
    rows = [
        ("腾讯控股", "2025", "+13.86%", "+15.85%", "56.2%", "29.9%", "1.35"),
        ("网易", "2025", "+6.96%", "+13.68%", "64.3%", "30.0%", "1.50"),
        ("腾讯控股", "2024", "+8.41%", "+68.44%", "52.9%", "29.4%", "1.33"),
        ("网易", "2024", "+1.77%", "+0.96%", "62.5%", "28.2%", "1.34"),
        ("腾讯控股", "2023", "+9.82%", "-38.79%", "48.1%", "18.9%", "1.93"),
    ]
    for i, row in enumerate(rows):
        yy = 432 + i * 48
        if i % 2 == 0:
            d.rectangle([1250, yy - 6, 3050, yy + 40], fill=(24, 24, 31))
        x = 1270
        for v in row:
            d.text((x, yy), v, font=font(22), fill=TEXT)
            x += 252

    rounded(d, [80, 760, 3040, 920], 14, fill=(18, 18, 23), outline=(52, 50, 46), width=1)
    d.text((108, 788), "分析结论", font=font(28, True), fill=TEXT)
    d.text((108, 842), "收入增速：腾讯 2025 年 +13.86% 领先，网易 +6.96% 更稳；盈利稳定性：网易净利率升至 30.0%，腾讯波动更大；", font=font(26), fill=MUTED)
    d.text((108, 878), "费用控制：销售费用率均下降，腾讯行政开支率（含研发）升至 18.11%；现金流：两家 OCF 均创五年新高。", font=font(26), fill=MUTED)
    img = img.resize((w, h), Image.LANCZOS)
    img.save(os.path.join(ASSETS, "project-data.png"))


def draw_avatar():
    w = 800
    img = make_gradient(w, w, (16, 16, 20), (28, 22, 14))
    d = ImageDraw.Draw(img)
    d.arc([70, 70, 730, 730], 0, 360, fill=GOLD, width=3)
    d.arc([92, 92, 708, 708], 0, 360, fill=(66, 62, 52), width=1)
    d.text((262, 296), "艾欣", font=font(150, True), fill=GOLD_LIGHT)
    d.text((338, 470), "A · X", font=font(30), fill=MUTED)
    d.line([318, 536, 482, 536], fill=GOLD, width=2)
    img.save(os.path.join(ASSETS, "avatar.png"))


def draw_video():
    w, h, fps, seconds = 1280, 720, 24, 6
    frames = fps * seconds
    rng = np.random.default_rng(42)
    particles = []
    for _ in range(90):
        particles.append(
            {
                "x": rng.uniform(0, w),
                "y": rng.uniform(0, h),
                "speed": rng.uniform(14, 46),
                "size": rng.uniform(1.2, 3.2),
                "alpha": rng.uniform(70, 190),
                "gold": rng.uniform(0, 1) < 0.72,
            }
        )
    out_path = os.path.join(ASSETS, "hero-bg.mp4")
    writer = imageio.get_writer(
        out_path,
        fps=fps,
        codec="libx264",
        quality=8,
        pixelformat="yuv420p",
        ffmpeg_params=["-preset", "veryfast", "-crf", "26"],
    )
    for f in range(frames):
        t = f / fps
        base = make_gradient(w, h, (9, 9, 12), (26, 20, 13))
        overlay = Image.new("RGBA", (w, h), (0, 0, 0, 0))
        od = ImageDraw.Draw(overlay)
        # subtle grid
        for gx in range(0, w, 80):
            od.line([gx, 0, gx, h], fill=(201, 164, 92, 7), width=1)
        for gy in range(0, h, 80):
            od.line([0, gy, w, gy], fill=(201, 164, 92, 7), width=1)
        # market curves
        phase = t * 0.85
        pts1 = []
        pts2 = []
        for x in range(0, w + 2, 4):
            y1 = h * 0.55 + 96 * math.sin(x * 0.006 + phase) + 40 * math.sin(x * 0.014 + phase * 1.9) + 18 * math.sin(x * 0.026 + phase * 0.7)
            y2 = h * 0.68 + 72 * math.sin(x * 0.008 - phase * 0.8) + 30 * math.sin(x * 0.018 + phase * 1.3)
            pts1.append((x, y1))
            pts2.append((x, y2))
        od.line(pts1, fill=(201, 164, 92, 34), width=7)
        od.line(pts1, fill=(227, 201, 130, 210), width=2)
        od.line(pts2, fill=(120, 132, 145, 120), width=2)
        # particles
        for p in particles:
            p["y"] -= p["speed"] / fps
            if p["y"] < -8:
                p["y"] = h + 8
                p["x"] = rng.uniform(0, w)
            color = (227, 201, 130, int(p["alpha"])) if p["gold"] else (160, 168, 180, int(p["alpha"] * 0.55))
            r = p["size"]
            od.ellipse([p["x"] - r, p["y"] - r, p["x"] + r, p["y"] + r], fill=color)
        # soft vertical light band
        band = Image.new("RGBA", (w, h), (0, 0, 0, 0))
        bd = ImageDraw.Draw(band)
        bd.rectangle([w * 0.42, 0, w * 0.58, h], fill=(227, 201, 130, 6))
        band = band.filter(ImageFilter.GaussianBlur(120))
        overlay = Image.alpha_composite(overlay, band)
        base = base.convert("RGBA")
        base = Image.alpha_composite(base, overlay)
        frame = base.convert("RGB")
        writer.append_data(np.asarray(frame))
    writer.close()
    print("video written:", out_path)


def main():
    draw_dashboard_dense()
    draw_report()
    draw_data()
    draw_avatar()
    draw_video()
    print("assets written to:", ASSETS)


if __name__ == "__main__":
    main()
