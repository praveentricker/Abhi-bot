module.exports.config = {
  name: "girldp",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "𝙈𝙧𝙏𝙤𝙢𝙓𝙭𝙓",
  description: "Random Photo BJ",
  commandCategory: "xxx video",
  usages: "gdp",
  cooldowns: 3,
  dependencies: {
    "request": "",
    "fs-extra": "",
    "axios": ""
  }
};

module.exports.run = async ({ api, event, args, client, Users, Threads, __GLOBAL, Currencies }) => {
  const axios = global.nodemodule["axios"];
  const request = global.nodemodule["request"];
  const fs = global.nodemodule["fs-extra"];
  var link = [
"https://i.imgur.com/SKDoA1D.jpeg",
"https://i.imgur.com/R1oTnZw.jpeg",
"https://i.imgur.com/DheAfDt.jpeg",
"https://i.imgur.com/2piZFI6.jpeg",
"https://i.imgur.com/JmUa3EE.jpeg",
"https://i.imgur.com/ehBTLl9.jpeg",
"https://i.imgur.com/HWoC9na.jpeg",
"https://i.imgur.com/ntt1mJu.jpeg",
"https://i.imgur.com/EKealeH.jpeg",
"https://i.imgur.com/vm9YNB9.jpeg",
"https://i.imgur.com/9L4K1hn.jpeg",
"https://i.imgur.com/6unrpHO.jpeg",
"https://i.imgur.com/8Wq0Gvn.jpeg",
"https://i.imgur.com/VU6Xfm1.jpeg",
"https://i.imgur.com/A02SaxW.jpeg",
"https://i.imgur.com/RZ8lixx.jpeg",
"https://i.imgur.com/qRKoDI5.jpeg",
"https://i.imgur.com/QtUTEXl.jpeg",
"https://i.imgur.com/K6bdHVj.jpeg",
"https://i.imgur.com/ccz5ont.jpeg",
"https://i.imgur.com/uTmN56P.jpeg",
"https://i.imgur.com/gm3ZCYj.jpeg",
"https://i.imgur.com/iKV3NfC.jpeg",
"https://i.imgur.com/DBdubs4.jpeg",
"https://i.imgur.com/xndLsjT.jpeg",
"https://i.imgur.com/ghcpmwj.jpeg",
"https://i.imgur.com/QJacKKZ.jpeg",
"https://i.imgur.com/bRyMjyy.jpeg",
"https://i.imgur.com/8Xamxp3.jpeg",
"https://i.imgur.com/ANaj7u1.jpeg",
"https://i.imgur.com/NwjMf8B.jpeg",
"https://i.imgur.com/qVGzt5j.jpeg",
"https://i.imgur.com/8SkC1iq.jpeg",
"https://i.imgur.com/bSLHt2b.jpeg",
"https://i.imgur.com/Ug05p04.jpeg",
"https://i.imgur.com/F4oqhWn.jpeg",
"https://i.imgur.com/9zALdmk.jpeg",
"https://i.imgur.com/tvFrx03.jpeg",
"https://i.imgur.com/3zZMYkD.jpeg",
"https://i.imgur.com/W2o5nfU.jpeg",
"https://i.imgur.com/en6r5RQ.jpeg",
"https://i.imgur.com/QTiE6mN.jpeg",
"https://i.imgur.com/L7CVUJi.jpeg",
"https://i.imgur.com/LIho0jw.jpeg",
"https://i.imgur.com/hlnFEU1.jpeg",
"https://i.imgur.com/B5dQmw0.jpeg",
"https://i.imgur.com/Rj7oOxx.jpeg",
"https://i.imgur.com/sbs70gK.jpeg",
"https://i.imgur.com/lfhGlTr.jpeg",
"https://i.imgur.com/EUsKnaC.jpeg",
"https://i.imgur.com/jrmpT1y.jpeg",
"https://i.imgur.com/RPWZSgE.jpeg",
"https://i.imgur.com/aRYnkZo.jpeg",
"https://i.imgur.com/Utcp2LP.jpeg",
"https://i.imgur.com/GtVpxxm.jpeg",
"https://i.imgur.com/13vipmt.jpeg",
"https://i.imgur.com/83b2wTc.jpeg",
"https://i.imgur.com/mm0KCHW.jpeg",
"https://i.imgur.com/x8qfejx.jpeg",
"https://i.imgur.com/luw44Gd.jpeg",
"https://i.imgur.com/MSQODY8.jpeg",
"https://i.imgur.com/AYKsbVa.jpeg",
"https://i.imgur.com/pn8lHUE.jpeg",
"https://i.imgur.com/Q4x5WBx.jpeg",
"https://i.imgur.com/UawED0S.jpeg",
"https://i.imgur.com/aymVCtk.jpeg",
"https://i.imgur.com/dC1A7hJ.jpeg",
"https://i.imgur.com/OBYSyt1.jpeg",
"https://i.imgur.com/Sy7q9ck.jpeg",
"https://i.imgur.com/C6FNs46.jpeg",
"https://i.imgur.com/cuq1zA5.jpeg",
"https://i.imgur.com/Xc7eVoG.jpeg",
"https://i.imgur.com/rpf2Klp.jpeg",
"https://i.imgur.com/jrlo1rc.jpeg",
"https://i.imgur.com/J8KTdZc.jpeg",
"https://i.imgur.com/yQRtKJy.jpeg",
"https://i.imgur.com/rPv6G9V.jpeg",
"https://i.imgur.com/dmarIyr.jpeg",
"https://i.imgur.com/vND9VHZ.jpeg",
"https://i.imgur.com/bYDwzqP.jpeg",
"https://i.imgur.com/c3fwNXh.jpeg",
"https://i.imgur.com/Co2U8bg.jpeg",
"https://i.imgur.com/HlJXqtj.jpeg",
"https://i.imgur.com/a2CUOv9.jpeg",
"https://i.imgur.com/AMZX78q.jpeg",
"https://i.imgur.com/qiLm36G.jpeg",
"https://i.imgur.com/TJEcoJh.jpeg",
"https://i.imgur.com/ojd2Nlu.jpeg",
"https://i.imgur.com/Rkm3zeE.jpeg",
"https://i.imgur.com/rw1ZDOI.jpeg",
"https://i.imgur.com/wcfnGcK.jpeg",
"https://i.imgur.com/qFKsVBV.jpeg",
"https://i.imgur.com/euFg48r.jpeg",
"https://i.imgur.com/rmvtUZy.jpeg",
"https://i.imgur.com/DIJbp4t.jpeg",
"https://i.imgur.com/gMrpint.jpeg",
"https://i.imgur.com/jSIdDPl.jpeg",
"https://i.imgur.com/y9itk3D.jpeg",
"https://i.imgur.com/if1lxWp.jpeg",
"https://i.imgur.com/Ia991Ha.jpeg",
"https://i.imgur.com/XCk9fFr.jpeg",
"https://i.imgur.com/gQZp74t.jpeg",
"https://i.imgur.com/z6APoP5.jpeg",
"https://i.imgur.com/xuJG48D.jpeg",
"https://i.imgur.com/jYxMwqN.jpeg",
"https://i.imgur.com/CO3Y81x.jpeg",
"https://i.imgur.com/vfQj1dl.jpeg",
"https://i.imgur.com/wkTqkZJ.jpeg",
"https://i.imgur.com/4csnzew.jpeg",
"https://i.imgur.com/j54YqqY.jpeg",
"https://i.imgur.com/68LvKfB.jpeg",
"https://i.imgur.com/vrstrhP.jpeg",
"https://i.imgur.com/K0sFKwh.jpeg",
"https://i.imgur.com/wYziqu0.jpeg",
"https://i.imgur.com/NG3bOyC.jpeg",
"https://i.imgur.com/kTncX69.jpeg",
"https://i.imgur.com/YHAcfXe.jpeg",
"https://i.imgur.com/UAIeL00.jpeg",
"https://i.imgur.com/xOEwVf1.jpeg",
"https://i.imgur.com/jPcWw73.jpeg",
"https://i.imgur.com/CjAd3AI.jpeg",
"https://i.imgur.com/0JiHmn5.jpeg",
"https://i.imgur.com/KIH2KAX.jpeg",
"https://i.imgur.com/bUHSdyb.jpeg",
"https://i.imgur.com/TkyvvZx.jpeg",
"https://i.imgur.com/jjCR9rP.jpeg",
"https://i.imgur.com/fJbSPEy.jpeg",
"https://i.imgur.com/B8Uw5RT.jpeg",
"https://i.imgur.com/rvmNjHy.jpeg",
"https://i.imgur.com/oTkBn0h.jpeg",
"https://i.imgur.com/v4aYRGc.jpeg",
"https://i.imgur.com/xvp00TU.jpeg",
"https://i.imgur.com/bOMgQcg.jpeg",
"https://i.imgur.com/odBOTf0.jpeg",
"https://i.imgur.com/rMVtOHs.jpeg",
"https://i.imgur.com/Fkw3uqL.jpeg",
"https://i.imgur.com/XVnUAT4.jpeg",
"https://i.imgur.com/rSAIORs.jpeg",
"https://i.imgur.com/cgpmEBg.jpeg",
"https://i.imgur.com/FSVIas2.jpeg",
"https://i.imgur.com/GRTxLuS.jpeg",
"https://i.imgur.com/14V5mpm.jpeg",
"https://i.imgur.com/rZBX7l8.jpeg",
"https://i.imgur.com/Gk6s6Bd.jpeg",
"https://i.imgur.com/kW8ojEJ.jpeg",
"https://i.imgur.com/obAinKh.jpeg",
"https://i.imgur.com/KrEvHEl.jpeg",
"https://i.imgur.com/LLVl4Oq.jpeg",
"https://i.imgur.com/A8QIqLn.jpeg",
"https://i.imgur.com/bh7Hr9z.jpeg",
"https://i.imgur.com/1IHKHpM.jpeg",
"https://i.imgur.com/Dn9SYmC.jpeg",
"https://i.imgur.com/fOj0BdC.jpeg",
"https://i.imgur.com/MLNWZF6.jpeg",
"https://i.imgur.com/XeDC1y9.jpeg",
"https://i.imgur.com/lHQvedU.jpeg",
"https://i.imgur.com/lhHmALK.jpeg",
"https://i.imgur.com/nVTyTyi.jpeg",
"https://i.imgur.com/QqLd3my.jpeg",
"https://i.imgur.com/kFibTqU.jpeg",
"https://i.imgur.com/HvJDLdy.jpeg",
"https://i.imgur.com/Gw1FH6v.jpeg",
"https://i.imgur.com/qiyM0Rx.jpeg",
"https://i.imgur.com/vWTpXKc.jpeg",
"https://i.imgur.com/0IOBZn1.jpeg",
"https://i.imgur.com/IL8JKvS.jpeg",
"https://i.imgur.com/BMB1bX0.jpeg",
"https://i.imgur.com/owgqbNq.jpeg",
"https://i.imgur.com/SEMKl4m.jpeg",
"https://i.imgur.com/zJ15dJh.jpeg",
"https://i.imgur.com/MZ8gzKe.jpeg",
"https://i.imgur.com/7P7SqPT.jpeg",
"https://i.imgur.com/u5qIbbw.jpeg",
"https://i.imgur.com/EJI4nrg.jpeg",
"https://i.imgur.com/vITdxxv.jpeg",
"https://i.imgur.com/Fj1Xhsh.jpeg",
"https://i.imgur.com/aCCEIND.jpeg",
"https://i.imgur.com/vLTRMdO.jpeg",
"https://i.imgur.com/fkEHw2e.jpeg",
"https://i.imgur.com/8GxaJSg.jpeg",
"https://i.imgur.com/3ZiZNIK.jpeg",
"https://i.imgur.com/sh5NAeH.jpeg",
"https://i.imgur.com/QOYxZeI.jpeg",
"https://i.imgur.com/SADYAl1.jpeg",
"https://i.imgur.com/WxdcXRQ.jpeg",
"https://i.imgur.com/64sAmHo.jpeg",
"https://i.imgur.com/s5XWVJq.jpeg",
"https://i.imgur.com/ittNndw.jpeg",
"https://i.imgur.com/WN8X6yk.jpeg",
"https://i.imgur.com/Xjpj3m2.jpeg",
"https://i.imgur.com/QNBMDH9.jpeg",
"https://i.imgur.com/QxUis57.jpeg",
"https://i.imgur.com/t5qUs0G.jpeg",
"https://i.imgur.com/uChqhi6.jpeg",
"https://i.imgur.com/O7YyQqz.jpeg",
"https://i.imgur.com/Napi4zn.jpeg",
"https://i.imgur.com/AcrlGhM.jpeg",
"https://i.imgur.com/RtBeZB2.jpeg",
"https://i.imgur.com/XWmg0Md.jpeg",
"https://i.imgur.com/Fh0fDPr.jpeg",
"https://i.imgur.com/ExIlkrV.jpeg",
"https://i.imgur.com/Gd6b1fM.jpeg",
"https://i.imgur.com/y4HyxXb.jpeg",
"https://i.imgur.com/FqsBosg.jpeg",
"https://i.imgur.com/f7whsuT.jpeg",
"https://i.imgur.com/9Tp4sZT.jpeg",
"https://i.imgur.com/shjwmRe.jpeg",
"https://i.imgur.com/I38ws6a.jpeg",
"https://i.imgur.com/EiTi4FH.jpeg",
"https://i.imgur.com/wRHvfCw.jpeg",
"https://i.imgur.com/6zeLFc2.jpeg",
"https://i.imgur.com/TWU6GKa.jpeg",
"https://i.imgur.com/cM0dPGz.jpeg",
"https://i.imgur.com/dE1CBWY.jpeg",
"https://i.imgur.com/XiDt0vf.jpeg",
"https://i.imgur.com/hEi1DvZ.jpeg",
"https://i.imgur.com/UGnFqY5.jpeg",
"https://i.imgur.com/j5oCJmZ.jpeg",
"https://i.imgur.com/8XfufiT.jpeg",
"https://i.imgur.com/ivdscCT.jpeg",
"https://i.imgur.com/TbsOyb4.jpeg",
"https://i.imgur.com/MHD5Kqr.jpeg",
"https://i.imgur.com/KyHcQPE.jpeg",
"https://i.imgur.com/PuUq1Hf.jpeg",
"https://i.imgur.com/EfcFW1y.jpeg",
"https://i.imgur.com/UVq1sCg.jpeg",
"https://i.imgur.com/rtUZOKd.jpeg",
"https://i.imgur.com/ahdua2u.jpeg",
"https://i.imgur.com/W5T4cdD.jpeg",
"https://i.imgur.com/L5ZvgKK.jpeg",
"https://i.imgur.com/D1hM9ol.jpeg",
"https://i.imgur.com/XGSfso1.jpeg",
"https://i.imgur.com/q2n3Lhp.jpeg",
"https://i.imgur.com/E5bpMj7.jpeg",
"https://i.imgur.com/OCwa75a.jpeg",
"https://i.imgur.com/uhf5BCL.jpeg",
"https://i.imgur.com/uHf3T5r.jpeg",
"https://i.imgur.com/tAzGSLt.jpeg",
"https://i.imgur.com/H308GEU.jpeg",
"https://i.imgur.com/9tc0Sb1.jpeg",
"https://i.imgur.com/xHsR7uE.jpeg",
"https://i.imgur.com/LBQsEJl.jpeg",
"https://i.imgur.com/4dfI8LX.jpeg",
"https://i.imgur.com/BdurT6E.jpeg",
"https://i.imgur.com/jF3KZmn.jpeg",
"https://i.imgur.com/nSknrMg.jpeg",
"https://i.imgur.com/aHYSoSh.jpeg",
"https://i.imgur.com/4jUILyR.jpeg",
"https://i.imgur.com/QQolEIr.jpeg",
"https://i.imgur.com/nOrWOEm.jpeg",
"https://i.imgur.com/0mo5tBf.jpeg",
"https://i.imgur.com/R4j0QDx.jpeg",
"https://i.imgur.com/zR98d5o.jpeg",
"https://i.imgur.com/qnuPNDD.jpeg",
"https://i.imgur.com/G21Wces.jpeg",
"https://i.imgur.com/vm9yFo4.jpeg",
"https://i.imgur.com/s34EIq7.jpeg",
"https://i.imgur.com/8D71pic.jpeg",
"https://i.imgur.com/6bFcGNd.jpeg",
"https://i.imgur.com/LflJpXM.jpeg",
"https://i.imgur.com/LWIT3cV.jpeg",
"https://i.imgur.com/d6bX40P.jpeg",
"https://i.imgur.com/TwYRrxY.jpeg",
"https://i.imgur.com/ec0rfyP.jpeg",
"https://i.imgur.com/kJMyXJN.jpeg",
"https://i.imgur.com/ZZKYXBE.jpeg",
"https://i.imgur.com/0RmyrHe.jpeg",
"https://i.imgur.com/0W1TzHj.jpeg",
"https://i.imgur.com/2hPRhjD.jpeg",
"https://i.imgur.com/D9qIIlk.jpeg",
"https://i.imgur.com/Ps3OvaT.jpeg",
"https://i.imgur.com/1c4cTou.jpeg",
"https://i.imgur.com/K2xVHKv.jpeg",
"https://i.imgur.com/5vkIsLv.jpeg",
"https://i.imgur.com/UYAKSVF.jpeg",
"https://i.imgur.com/eub2N2N.jpeg",
"https://i.imgur.com/ywN82rw.jpeg",
"https://i.imgur.com/yfjOpJ5.jpeg",
"https://i.imgur.com/L0mCDqn.jpeg",
"https://i.imgur.com/JzIsdOp.jpeg",
"https://i.imgur.com/ysCOc2N.jpeg",
"https://i.imgur.com/aDpc29d.jpeg",
"https://i.imgur.com/eVbsS2V.jpeg",
"https://i.imgur.com/wlMUWUL.jpeg",
"https://i.imgur.com/y3oyc3b.jpeg",
"https://i.imgur.com/acYzyWk.jpeg",
"https://i.imgur.com/l3NQQWf.jpeg",
"https://i.imgur.com/mQDxUkc.jpeg",
"https://i.imgur.com/LZOA6rX.jpeg",
"https://i.imgur.com/u9wT9Dz.jpeg",
"https://i.imgur.com/gtczSAc.jpeg",
"https://i.imgur.com/hw3UkPi.jpeg",
"https://i.imgur.com/wzAW019.jpeg",
"https://i.imgur.com/rqZ8mfK.jpeg",
"https://i.imgur.com/zNmDOP5.jpeg",
"https://i.imgur.com/GADQsGg.jpeg",
"https://i.imgur.com/yMdJ5ae.jpeg",
"https://i.imgur.com/7vL3XFP.jpeg",
"https://i.imgur.com/lsaUd3J.jpeg",
"https://i.imgur.com/nvFFgKE.jpeg",
"https://i.imgur.com/sv9P2jq.jpeg",
"https://i.imgur.com/5yRpf1m.jpeg",
"https://i.imgur.com/vGpziKj.jpeg",
"https://i.imgur.com/D5eyT4b.jpeg",
"https://i.imgur.com/ahX131S.jpeg",
"https://i.imgur.com/i8z22so.jpeg",
"https://i.imgur.com/XktQQvS.jpeg",
"https://i.imgur.com/qeaqvA0.jpeg",
"https://i.imgur.com/kI9H1wr.jpeg",
"https://i.imgur.com/1otqH9c.jpeg",
"https://i.imgur.com/GWCQirj.jpeg",
"https://i.imgur.com/tsZHmDK.jpeg",
"https://i.imgur.com/kDNDReo.jpeg",
"https://i.imgur.com/XZ62m5Z.jpeg",
"https://i.imgur.com/gfcl9ct.jpeg",
"https://i.imgur.com/jYqPzTO.jpeg",
"https://i.imgur.com/FXK5oBR.jpeg",
"https://i.imgur.com/T7rXncE.jpeg",
"https://i.imgur.com/tkOKvb2.jpeg",
"https://i.imgur.com/avdd8aj.jpeg",
"https://i.imgur.com/EAG8qbJ.jpeg",
"https://i.imgur.com/t8UKMcA.jpeg",
"https://i.imgur.com/ZgVxCvT.jpeg",
"https://i.imgur.com/p4GlZXI.jpeg",
"https://i.imgur.com/TZfjReZ.jpeg",
"https://i.imgur.com/yodYUIm.jpeg",
"https://i.imgur.com/dxokGxS.jpeg",
"https://i.imgur.com/bLd2t0J.jpeg",
"https://i.imgur.com/LHbTZXU.jpeg",
"https://i.imgur.com/792ym7i.jpeg",
"https://i.imgur.com/IURdCjm.jpeg",
"https://i.imgur.com/8fffoMt.jpeg",
"https://i.imgur.com/3EjVlI7.jpeg",
"https://i.imgur.com/uSklphS.jpeg",
"https://i.imgur.com/fATRBff.jpeg",
"https://i.imgur.com/lmAuLBA.jpeg",
"https://i.imgur.com/JXEjd0O.jpeg",
"https://i.imgur.com/5XXQTEZ.jpeg",
"https://i.imgur.com/vzUsfLx.jpeg",
"https://i.imgur.com/lqSAilK.jpeg",
"https://i.imgur.com/6lFkogp.jpeg",
"https://i.imgur.com/4PN6W4y.jpeg",
"https://i.imgur.com/gJQl4vr.jpeg",
"https://i.imgur.com/neJDoxd.jpeg",
"https://i.imgur.com/ceML6xV.jpeg",
"https://i.imgur.com/UbU3rQ3.jpeg",
"https://i.imgur.com/RbkRa78.jpeg",
"https://i.imgur.com/raQ9y7r.jpeg",
"https://i.imgur.com/BRCGSQg.jpeg",
"https://i.imgur.com/V9pyWjH.jpeg",
"https://i.imgur.com/tufnbTi.jpeg",
"https://i.imgur.com/trOp8XT.jpeg",
"https://i.imgur.com/T2Ur9mt.jpeg",
"https://i.imgur.com/thVdWkb.jpeg",
"https://i.imgur.com/WlsRRcC.jpeg",
"https://i.imgur.com/r4GgeXE.jpeg",
"https://i.imgur.com/qKKSiYJ.jpeg",
"https://i.imgur.com/11KoOPk.jpeg",
"https://i.imgur.com/XZKjsVo.jpeg",
"https://i.imgur.com/NcuwCfX.jpeg",
"https://i.imgur.com/8FOvKBD.jpeg",
"https://i.imgur.com/tDoh51x.jpeg",
"https://i.imgur.com/gtELbZc.jpeg",
"https://i.imgur.com/MD5UpSU.jpeg",
"https://i.imgur.com/bu478DV.jpeg",
"https://i.imgur.com/qNUbO1E.jpeg",
"https://i.imgur.com/ZbsBHeu.jpeg",
"https://i.imgur.com/Gazdhlw.jpeg",
"https://i.imgur.com/XLL5f5X.jpeg",
"https://i.imgur.com/L8Om47s.jpeg",
"https://i.imgur.com/yJsSjxj.jpeg",
"https://i.imgur.com/ZUQ0Gig.jpeg",
"https://i.imgur.com/njUnlUL.jpeg",
"https://i.imgur.com/VwAKM0w.jpeg",
"https://i.imgur.com/Jhw8eBW.jpeg",
"https://i.imgur.com/uMiIOch.jpeg",
"https://i.imgur.com/wvyqpe7.jpeg",
"https://i.imgur.com/H100F6B.jpeg",
"https://i.imgur.com/7tGBAuh.jpeg",
"https://i.imgur.com/kPmjRXC.jpeg",
"https://i.imgur.com/67iWIxP.jpeg",
"https://i.imgur.com/qoGnNxk.jpeg",
"https://i.imgur.com/JhJRmI1.jpeg",
"https://i.imgur.com/4HPTWkb.jpeg",
"https://i.imgur.com/SXhmVFF.jpeg",
"https://i.imgur.com/AHYmnzl.jpeg",
"https://i.imgur.com/m2hScJL.jpeg",
"https://i.imgur.com/OszC2oI.jpeg",
"https://i.imgur.com/Fpv6KTZ.jpeg",
"https://i.imgur.com/3yRyOx1.jpeg",
"https://i.imgur.com/mpOGF3M.jpeg",
"https://i.imgur.com/Aa0l9T2.jpeg",
"https://i.imgur.com/vjpU8Qi.jpeg",
"https://i.imgur.com/CZEsQD6.jpeg",
"https://i.imgur.com/8X9hagn.jpeg",
"https://i.imgur.com/7iSJ8iK.jpeg",
"https://i.imgur.com/Q8FNSXI.jpeg",
"https://i.imgur.com/FP20htF.jpeg",
"https://i.imgur.com/l3EDOwr.jpeg",
"https://i.imgur.com/6Tht7ed.jpeg",
"https://i.imgur.com/fsrwbPx.jpeg",
"https://i.imgur.com/I0rthEA.jpeg",
"https://i.imgur.com/hsDgEe3.jpeg",
"https://i.imgur.com/YZLxr6r.jpeg",
"https://i.imgur.com/J3KPjWh.jpeg",
"https://i.imgur.com/LmccHSZ.jpeg",
"https://i.imgur.com/if7eLZD.jpeg",
"https://i.imgur.com/znZOzWW.jpeg",
"https://i.imgur.com/OsAE3hB.jpeg",
"https://i.imgur.com/nCA1UCY.jpeg",
"https://i.imgur.com/6xIafW6.jpeg",
"https://i.imgur.com/3eTwdLe.jpeg",
"https://i.imgur.com/XujGX2m.jpeg",
"https://i.imgur.com/TCvyf8T.jpeg",
"https://i.imgur.com/JB5WnzO.jpeg",
"https://i.imgur.com/rF9UDl6.jpeg",
"https://i.imgur.com/WMnwGkD.jpeg",
"https://i.imgur.com/u9BmP1e.jpeg",
"https://i.imgur.com/OE45zT1.jpeg",
"https://i.imgur.com/r1yLupM.jpeg",
"https://i.imgur.com/ZTa1ByR.jpeg",
"https://i.imgur.com/QLtBfTe.jpeg",
"https://i.imgur.com/EupwsSn.jpeg",
"https://i.imgur.com/sxFMtOY.jpeg",
"https://i.imgur.com/ARMA4rP.jpeg",
"https://i.imgur.com/9g2VFMi.jpeg",
"https://i.imgur.com/hXiXsd8.jpeg",
"https://i.imgur.com/Dg25mYK.jpeg",
"https://i.imgur.com/mbkoM0l.jpeg",
"https://i.imgur.com/gKTMAmA.jpeg",
"https://i.imgur.com/PnK0jst.jpeg",
"https://i.imgur.com/fdMlAaH.jpeg",
"https://i.imgur.com/qskEDdf.jpeg",
"https://i.imgur.com/odCaB6A.jpeg",
"https://i.imgur.com/mTj7oLZ.jpeg",
"https://i.imgur.com/rhTfYgr.jpeg",
"https://i.imgur.com/aQVib1h.jpeg",
"https://i.imgur.com/52Usvtv.jpeg",
"https://i.imgur.com/kHosk88.jpeg",
"https://i.imgur.com/aym1b03.jpeg",
"https://i.imgur.com/p2NT1Hh.jpeg",
"https://i.imgur.com/sCyJo8D.jpeg",
"https://i.imgur.com/nWYG4IN.jpeg",
"https://i.imgur.com/FTJekhf.jpeg",
"https://i.imgur.com/xGtkUdO.jpeg",
"https://i.imgur.com/x5NEweI.jpeg",
"https://i.imgur.com/s2IRcLm.jpeg",
"https://i.imgur.com/NdjTib0.jpeg",
"https://i.imgur.com/DQzKbl9.jpeg",
"https://i.imgur.com/e9m3nsz.jpeg",
"https://i.imgur.com/3K7wtPt.jpeg",
"https://i.imgur.com/5tsZ2st.jpeg",
"https://i.imgur.com/G3ZqPBz.jpeg",
"https://i.imgur.com/k4pCxeb.jpeg",
"https://i.imgur.com/XYVcZDL.jpeg",
"https://i.imgur.com/BfPXMWG.jpeg",
"https://i.imgur.com/SYwArbx.jpeg",
"https://i.imgur.com/ZqwqGbr.jpeg",
"https://i.imgur.com/1WpJfbU.jpeg",
"https://i.imgur.com/CorqiMV.jpeg",
"https://i.imgur.com/ZwUUyJ5.jpeg",
"https://i.imgur.com/5gdiQdZ.jpeg",
"https://i.imgur.com/a54LXsn.jpeg",
"https://i.imgur.com/TN5drNm.jpeg",
"https://i.imgur.com/rzM5Myx.jpeg",
"https://i.imgur.com/VsBr2H7.jpeg",
"https://i.imgur.com/rBNiIbf.jpeg",
"https://i.imgur.com/FNdjDAD.jpeg",
"https://i.imgur.com/zg5ykCN.jpeg",
"https://i.imgur.com/z7yXotc.jpeg",
"https://i.imgur.com/MoaYU4o.jpeg",
"https://i.imgur.com/hb5oLxa.jpeg",
"https://i.imgur.com/jLSDOPz.jpeg",
"https://i.imgur.com/Fp8jpCs.jpeg",
"https://i.imgur.com/HBApfDW.jpeg",
"https://i.imgur.com/GUFA59F.jpeg",
"https://i.imgur.com/FNDVeuL.jpeg",
"https://i.imgur.com/wkDzonA.jpeg",
"https://i.imgur.com/rY2TZtE.jpeg",
"https://i.imgur.com/Q5Rj5Jk.jpeg",
"https://i.imgur.com/oSyT3FR.jpeg",
"https://i.imgur.com/SaIl3n6.jpeg",
"https://i.imgur.com/CzTJwLV.jpeg",
"https://i.imgur.com/CKmzRoz.jpeg",
"https://i.imgur.com/nN2CdJV.jpeg",
"https://i.imgur.com/rsuJWdw.jpeg",
"https://i.imgur.com/SSLmQQb.jpeg",
"https://i.imgur.com/vW3G9lm.jpeg",
"https://i.imgur.com/MiMwIrQ.jpeg",
"https://i.imgur.com/gynIVGS.jpeg",
"https://i.imgur.com/w4eyQhl.jpeg",
"https://i.imgur.com/wvO4hU6.jpeg",
"https://i.imgur.com/JaCAq9z.jpeg",
"https://i.imgur.com/PqD8g7j.jpeg",

];
  var callback = () => api.sendMessage({ body: `─━━◉❖𝗝𝗨𝗟𝗠𝗜≛𝗝𝗔𝗔𝗧❖◉━━─✨️`, attachment: fs.createReadStream(__dirname + "/cache/5.jpg") }, event.threadID, () => fs.unlinkSync(__dirname + "/cache/5.jpg"));
  return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname + "/cache/5.jpg")).on("close", () => callback());
};
