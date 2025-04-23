import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Dialog } from "@/components/ui/dialog";

// Initial cards
const initialCards = [
  {
    title: "🏛️ 宗教阻礙",
    content: [
      "找一座教堂",
      "① 繞教堂走一圈",
      "② 擲骰子：擲出456通過；123需禱告5分鐘再重擲，直到成功",
    ],
  },
  {
    title: "🌸 春天阻礙",
    content: [
      "找5種不同的花",
      "① 拍照",
      "② 說出正確花名（至少同一屬）",
      "❌ 不可查網路",
    ],
  },
  {
    title: "⌚ 手錶阻礙",
    content: [
      "找一間手錶店",
      "① 關主拍下櫥窗展示",
      "② 玩家猜手錶價格，最多3次",
      "③ 關主僅提示高一點/低一點",
      "④ 誤差需在20%內",
    ],
  },
  {
    title: "🧀 起司阻礙",
    content: [
      "頭頂圓形起司",
      "① 唱完整首瑞士山歌",
      "② 過程中起司不能掉下來",
    ],
  },
  {
    title: "🐮 牛牛阻礙",
    content: [
      "找到一頭牛",
      "① 在牛前喝牛奶",
      "② 用法語說“Santé!”",
    ],
  },
  {
    title: "🏰 歷史阻礙",
    content: [
      "找到二戰前建築",
      "① 證明建築年代",
      "② 擲2顆骰子決定疊石數量",
      "③ 疊出石塔",
    ],
  },
  {
    title: "🍫 巧克力阻礙",
    content: [
      "品嚐一塊關主提供的巧克力",
      "① 猜可可含量（整數）",
      "② 最多3次機會",
      "③ 猜對才通過",
    ],
  },
  {
    title: "🔪 瑞士刀阻礙",
    content: [
      "用瑞士刀削鉛筆（關主提供）",
      "① 畫出關主提供之題目",
      "② 雙人合作猜圖畫內容",
    ],
  },
  {
    title: "⛰️ 雪山阻礙",
    content: [
      "找到一座山頂有雪的山",
      "① 模仿「海蒂」姿勢拍照",
    ],
  },
  {
    title: "💰 瑞郎阻礙",
    content: [
      "找6個類似瑞郎顏色的背景",
      "① 每個顏色拍一張",
      "② 模仿紙鈔人物的手勢",
    ],
  },
];

// Component definition (shortened for context)
export default function CardDrawer() {
  // Insert your component code here
}
