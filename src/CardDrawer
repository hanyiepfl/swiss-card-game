import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Dialog } from "@/components/ui/dialog";


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
      "② 隊友猜圖畫內容",
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


export default function CardDrawer() {
  const [availableCards, setAvailableCards] = useState(initialCards);
  const [drawnCards, setDrawnCards] = useState([]);
  const [pocket, setPocket] = useState([]);
  const [usedCards, setUsedCards] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);
  const [selectPocketCard, setSelectPocketCard] = useState(false);

  const drawTwoCards = () => {
    const uniqueAvailable = availableCards.filter(
      (card) => !pocket.some((p) => p.title === card.title)
    );

    if (uniqueAvailable.length < 2) return;

    let newDrawn = [];
    let remaining = [...uniqueAvailable];
    while (newDrawn.length < 2 && remaining.length > 0) {
      const index = Math.floor(Math.random() * remaining.length);
      newDrawn.push(remaining.splice(index, 1)[0]);
    }

    setDrawnCards(newDrawn);
    setAvailableCards(
      availableCards.filter((card) => !newDrawn.includes(card))
    );
  };

  const keepCard = (cardToKeep) => {
    if (pocket.length >= 3) {
      alert("口袋已滿，請選擇一張使用或放回牌堆");
      setSelectPocketCard(true);
      return;
    }
    setPocket([...pocket, cardToKeep]);
    setDrawnCards([]);
  };

  const returnToDeck = (card) => {
    setPocket(pocket.filter((c) => c.title !== card.title));
    setAvailableCards([...availableCards, card]);
    setSelectPocketCard(false);
    setSelectedCard(null);
  };

  const confirmUse = () => {
    setPocket(pocket.filter((c) => c.title !== selectedCard.title));
    setUsedCards([...usedCards, selectedCard]);
    setSelectedCard(null);
  };

  const showCardOptions = (card) => {
    setSelectedCard(card);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-white to-blue-100 p-4 space-y-6">
      <Button onClick={drawTwoCards}>抽兩張阻擋卡</Button>

      {drawnCards.length === 2 && (
        <div className="flex flex-col items-center space-y-4">
          <p className="text-sm">點選要收藏的卡，另一張將丟回牌堆</p>
          <div className="flex gap-4">
            {drawnCards.map((card) => (
              <Card key={card.title} className="w-40 cursor-pointer hover:scale-105 transition" onClick={() => keepCard(card)}>
                <CardContent className="p-4 text-center text-sm">
                  <h2 className="font-bold mb-2">{card.title}</h2>
                  <ul className="text-left list-disc list-inside text-xs">
                    {card.content.map((line, i) => (
                      <li key={i}>{line}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}

      <div className="mt-8 w-full max-w-xs">
        <h3 className="text-lg font-bold mb-2">🎒 我的口袋 ({pocket.length}/3)</h3>
        {pocket.length === 0 ? (
          <p className="text-sm text-gray-500">尚未收藏任何卡</p>
        ) : (
          <div className="space-y-2">
            {pocket.map((card) => (
              <Card key={card.title} className="bg-white cursor-pointer hover:bg-blue-50" onClick={() => showCardOptions(card)}>
                <CardContent className="p-3 text-sm">
                  <strong>{card.title}</strong>
                  <ul className="list-disc list-inside text-xs">
                    {card.content.map((line, i) => (
                      <li key={i}>{line}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
        {selectPocketCard && <p className="text-xs text-red-500 mt-2">請點選一張口袋卡使用或放回牌堆</p>}
      </div>

      {usedCards.length > 0 && (
        <div className="mt-6 w-full max-w-xs">
          <h3 className="text-md font-bold mb-2">🗂 已使用卡片</h3>
          <ul className="text-sm list-disc list-inside">
            {usedCards.map((card) => (
              <li key={card.title}>{card.title}</li>
            ))}
          </ul>
        </div>
      )}

      <Dialog open={!!selectedCard} onOpenChange={() => setSelectedCard(null)}>
        {selectedCard && (
          <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
            <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className="bg-white rounded-2xl shadow-xl p-6 w-80">
              <h2 className="text-lg font-bold mb-4">{selectedCard.title}</h2>
              <ul className="list-disc list-inside text-sm mb-4">
                {selectedCard.content.map((line, i) => (
                  <li key={i}>{line}</li>
                ))}
              </ul>
              <div className="flex justify-end space-x-2">
                <Button variant="outline" onClick={() => setSelectedCard(null)}>取消</Button>
                <Button variant="ghost" onClick={() => returnToDeck(selectedCard)}>放回牌堆</Button>
                <Button onClick={confirmUse}>使用卡片</Button>
              </div>
            </motion.div>
          </div>
        )}
      </Dialog>
    </div>
  );
}
