import './style.css';

const app = document.querySelector('#app');
const frame3ImageDataUri = 'data:image/webp;base64,UklGRkwkAABXRUJQVlA4IEAkAABQpgCdASpuAW0BPj0ejESiIaEQ+MU0IAPEtLd+Lzm4uvvIQgMmZeHte/aj8gPNn9I+mf4v5e/uz8MGbvsq8gPcf7jvsPyJ/K77mf2fe788fK/4CPa/+I/I/+v/szyL+/f8X0IPb/7t/ovy7+LDuZ6Xf0n7i+4H/Ov6R/cfyj/f/pv6A383/qn+d/wP7f/336i/97/x/mj/tPhL9c/8//S/uf/i/sK/lH9F/yH97/c7/I////yfej7OP3S9j79e/+uPOStjGMYxjGMYxa3wehdyRMEL771tR2zOcl4S5ZAso9LXmkQlKeWWmRZR66dC6gxd5iDjQZhy4BJJ1dwobXGyj106F2gy6hrT7u3g2c3PrYfv4gF6Q8zOCYlqA3EiKY0zfQp334uobXGyj10d+THyj106AGus/NKklBnpHcbcY2UegGCxlprb//Z8ei4Bre8sLbtvO5Ejn9/xIgNSXYqvLm+qKcg6Jnyq/D15SH4BPXChKC/uL0Xsc0njgsOf7B/gBNg/xyhTOAC3X3QGQUzce11I3+jhaIrGV2TOmWJqKjOa2F7B4vfo/YCwbc/UMEosXZnIs5epi3ta6GHhUpV5/oIW3mcwXlKpM8fbWojR+UID4HodyeqNhksQw6H9zyhwnWbtPOaPXN8zEiQjDRnv7gDQPSVzSSbgiXNpVG5z+DVtILpNm6LVrJ0GgOX40p4fRrAQ3scyI45glq+mSr24x+RZxTYx657DA+91y4MwesYcnuwjOtOl1aqINE825JtKDFi1fUpuxgZ8IxPeI1M5+a5IIqGJhFnJoCgR55oFaKN7fc9r7vxdybtgXBh9tLNrovPWL7oNOPehLB9g2rB22DXJGsjrDH6tnZ0CZWwzIJzkkCUKXCIJAhgFsvGgmIZ789h9JXoZoDnIUxaSq++uXrR+0sBHsDzwKUesx7uOUck40rpJk3OAKLNeIiU92WaLd7zArZASTVZfLLt14sShhBifEWZVmG7T9xyVCcmL0r0xJaFBUtstBWRyzCx9qW+2alfJlgU2FH4HbHIJIf8s56LOu0RHLCm8SZGNPf6jZZmq6F5J7eeGhFfCgAQyTGc+oiALAYM0N5XUjqEqkKCC7Xw2MyIi50PunAyWezcWazJlYckU9VXryU2fEm5ewCZy9M7n//qLa+xGonXr9iEbyxBNjuk2jS+JwXZl/+OQach3KDqq9ubjrmCR0Sgko1U7jxXyeQlfdMDlPXr1Rk/qyLfOeI8ZCeJWOO0CxgcaX2jLRgD5rGS8A0+6oJlWloYgy5CNZLX/92yFMLG5nxzvBSS63iTge2wu7EMoee+9rP+RTR2teRAMdcmvwPaq+SHJOtm+cEXY3hsUYJcJ9Yk7YEQsZ99PuWRsc6O5ZKxqHkniXgQeCl8uQI/dsZZ+x0HDLMOkmMlYGxsbcyf0RGpUrY1iVxLSQaEy37R1qEhxnvfgJn3yyrFTrZR66c/pycI7sNgO4unQu06dCn2Og5cA7aszDBY2EU3PsdBx5Vbb6qbtQZz1pHmNlHrpglKUnO02QiQiGhKOWqLwaunlImWXZk7p9a8O4mSGYyINO4yhubWb0HWdi1NylzvPWqnhr4YQHVNPY7u3sRQGc9nP8h34BHfE0+9vi/AQa7nY8MMEe1bJtgY4QH2RS7cDgp6uE97kPMdZLmoMMwQMpQYlO0zCi1M58oOPRRnLpR4wPzglzsDMWgn1EYYjCZAOL2cbkJ8Y7yviUiw7CzBswiBIZd5HzWvWwy2yxfHrAkEgKxjGMYxjGMYxjGMYxoAAAP79/6fk15Ihubdislv4FLs3msbhQzLM7pE6P92Q/lvYI9G7ynUIgxf2n6Kt8Xd3sTN0lpizKofOukAypVJoDhZGEGMZFboJlOFPnD/TESILCTbAsno6ZXlANHtLIvTJGD8X185LM5xhH9i/bJ/wiU1MDPH5XJf50emaL5pXuJoTULjNFymW2xHJ7VOACuGaf51/GUvuDzZdXN5JeEgXED9CG7WZtukmqEX2CjXskfLHuP6gAWMnYUGFAQizs1AtYrtuBul93hbbnssfaW+LAWS9EoMP/iiRmQKg8xL6UAPrfoMtHCC5E6hc/Lygxt8XL3PCp8DyztnZ77sYMItKq4GHyA9NYrhQVpWNEJPzigUQjOCyLPL+Q84uwiifM0fXmkVlMbD3k/M0d7rnbg2eooosH+ljx3s3gyNnBZ1zE/t57gzqMJqqTv/QpfTjAnm2TKDjDdiq5UFRCDb8LkZlltg0i9+FkQNeC7OMuUlTEQ0CgGVYeYRWXZo/2Ib4abvJISwXmIIlx3uNlmrk6ds8xexvj0weB5gaNgNZS4usEZ7z5F2WdfbH4CN5/YRkekW0t3WVGz54yBlfbRQLyBZiuvRjq4K82W74Bkn2NAQTQYYVIs7/1qheNAFG5b/stQ3PF/0mn3X3qcuHTOOTS4yeHS+QhMgcCoprVhvzTGzhyzPiwKjXxN07XDKSuIngxQ7boJQSJMdwy7/OOK0CnhWZIbVeLNqNgxePTqgCxfTXs7rcieawD9zjnGKVc5XdOWB3IgSzvBw+4pUyXnJrFmZSa4flDlTGudwoN/l3qkxXN/TMrbHXHFovVt6bZCrrFKW/UEPzGegdPufefJF0C85ZTMeqclMbtQj8pE5NzYdjrgx0bJ7biEIE3zjOcR52xaR2eMX+MTnKaj2dOe+CzrmGx2TiPvsFNSwoUWq2zZYvc2S7BUxghhobgYrMN0h/66GWUepQJU5VAdyauSJsbkscwUN4zG3Bt45JDd7SpQjPYNsqG0f6Bry8zj+CaBxs0ulwdQO6y+lQjg9/fQO2lZDUlMm4e9EYAQE8Ep6BUho6bp8vfy4FTIOVcZv+Kgv8fdvNP5WFzRT4Cnr3USOXYh6rw1Gv1t928+HAlubVd4+0l4fzFk4qlh+VR6lmrEuZQz86jcPbUangX9WbMviIpCqfYNBvMtYMeT21JV5FEOk3xKWfiVPsjBbwNSAqoIP/w2HT94lhthnOxKrrq+5HC99PcDMldQhR7EMoJkQtMSh7flaczCJo0DQLgoCgi8SGnbrh5a7Z+bdw7o4VbLO1NnKB2iVaezj7+hcVzSgjy7kK1aWjgQ5GkgV/6nggctviR8nhdOm3iwPZI07QPeJHo5lzxWY7o1njE3qEJxXBWP+rgJ2YBKcGHe8EuF32tN2VgmsaYri2WJJTmxFH+osgEdYnQ0GHA4fiKSiF1Q9Ou+YQFWu8Xg93xPChjWfjx3mpXv0jAOQIfBm4EYYa1clK63M22q02zoQVtqs8q5Z50wp1Dd1rjlH4DzcLRm2FG0+vXuOn8dOgqDpxt/ParqJiuEwt4zToTJEwXdpmqm/MUJ3A56OukEIzXClsXxzyuLS/zf0mzNan0Dt2NOMbZS/nqT0Z+mllHjaemTUR1MBsoMhfbozl3yaYcQEbIUL6Y7qRSwsftdWEVWndCy0/+2tbJGHlMvtg5davo6kgIkFG9bTg9VNgFn4l62Kqwih9GcM7dF2kg7ZdAXYs7trFQB8FTDHQYQqCE/ErUAMst2QpxAh6+ZsfkhPEEsBImBBIiV1p5HkSnkb2lLGCZqW9yATJcadZ/jGTmCNBUUOlj0ubcDcUyD4luUWxZ8uqVphC9V4XPes+q98l47LMvoovfZEX92fMSXgFcqqKbM/JkpiTcVtrS2yzf1XthlNHRgUAG3Ud51diFUotzAjNQaTQrhFCBsOb+SsNTp4ZfuuWcqmo8/8krMMN9+tRQV4UnW2kts1i5j72IJT0KEfW9YUWECXi1HdDIDwQotfAKVxw0Xs2J0UxkuYvFPQ8iN94ValaJ9j/YV0yQlJcwFaPZI6/vuEM0qXJc2E1gQ1jaxqo4w1+KyfJl9SxsZYs1zckLSDcY3cop+DCbLyDvTgsyf4fm9bGyt3vVfOuT4ojIO92fMCfoUE9l3/+moOKzAYZwWynbDCUhw0JY7S1KAUtrK7OC7VvCG9DYHDsnWvsww9GaJIzmvuAjaUg4nyYqH7lpTloNPPk1Urqm4mRFhz0P0Ds0bXu0xeT5cumJP+VncaHHcza1oPoiDuB/chsPP2tx850huZnSxz4u0I48fPdEoO/8hsSjW49A8SFuJd++ivbrTTZcv9eXeEQ6i+148B2h8NChxSz0l/hUVC5UyziRvyV2FkVynSCANIUJ5myCTqzGNdiqz0TznCIdcrMoiV8R7djYaPKd9aoQtC5s3XFdNmcM1SfJJ855CYoxCM2GWgIy3eET6IhSinDc6aRDcodUWUmkibOh3h7XhbN8WLoXeCpSYWfvjT5NL8SMFgCoC8LCw9kqjeCufkTvanc9bqE8aQW34iP5FzVhvYkhCMsXoz6hBqRW2LJtc6kfR12/W0MzyhjMCh82VcUxasgVpU6ElUrVDjnlqQcilNOlPDv4MGhmYPfvjW1M0A4Cax7fY3759Uhf6lxsGiI+WO+fpQ1uvAbm6hhe2xXZXdjsmmD9juq8xG8hiD2PekEBBfuvfqrWQQIbRNbqfWnUYWDwdPxiF6usXE/+lJpUoAOgSk3TFBvOuNg7xQ2IeTd2//GNeOmaaHAn9tkFvNt8f6IP1Q8ndxhns3/fHai7871TZrcYkyP1pKmfVdxccBBIADL3LifFgX0J2mkv2PNPtjG1fafjrqTKBXM3ImnYoOEbjXKlPxQPBCBJvFBVhWOKCxQzWn6GL8UrFbz4b/UodhAw3mqJViR0YGWKj/orYRRGzzIIy1958NNCzNS3iTjltAgXGv/Uo0lXiyfIA7OqfWBkYSDHUGQ7Trb2x3cUaVt+TFzRVzfM3VYrd/5is6ed42FiXyGy+a9FslzHbb/7hilTqHcv3cq0kR9KOc/Viac8OmduEpPkvm3uYlJkjlnRo0ulWBN8dDgb6bw7qvRwtlK3ClvJXqeZ1u1rTkW8Oe2s4MQsV6cGG+RHmSbmdeChfiOpDI4BGseuO9kGzjiKCvQlEJ6TeXxBL5UecdNSfLkSJQzg/h6ApmhHxVPRRkIuj16woIIJMjh2wNTD5US2DKGYloSIowwMhgRCKcrbhEdC/dPkom0Ul4NLXc/9G0GTrO9tLQr8aqkzNAgT0wrtkdjSgTB7PY+3qq3Ds5oYzucoTbJUJR/M86XlVBDU9jQVwbj+MdO4K5nCzoK2MQorFHIDCY8uqnVljzQ7MX0H2P/e1PeBKd802jnGN42hf/n/0fteJ6owXponszVCd28iUZjULUMfu2+LGLLaPdSaQ2UenyfVlgGSqOoZkE257ZM63MyEVBK0fmq02MfJgyJfD19AgXXsmI2dl/kpEV5/cBz/kXe2NbuyNx+GZFbbRxMe13EwBnAf1vT8CUwc7av4RtZvIS7aC+ZH81LhDmcmkjlUF8U8w0bjiCTLB0Z/9JkPWfSldFYa1Z+c/DvbyUb28Q14/QgWyRpl7Nm13nULr8VADtGToRPOUXlPvFsnjW0HO+Ch9PoghoW1HX8vw3oKk5G7cdSuu45033LnWX5wvYO6c52bAOZxqV+M0304y0uuZs/Va0Dioz+MD53N0ifXpGlAT69kCjWRXNMgAO6NMptvOP4t85lbo87usECU+GGa0JuPprE9GaAGfBY1oaj5va8u9imqG9zMntTaMeG63oHvg4f6Hvc/CM8CA2znGrFO7pEIakKmLhIZSaxW1f3C8Gzl67dFgPtACaAMMfZ2R7imnChPwIL3i9AUiwAyDCZW3zBf+2C+uBoqyYvxi9ml1nxSxi7Rh3B9FG3URCMOgw4mh8ZrZYPkU0txalxTnWKnRMZ41waH5TMTotGR/KxXa+aaNtqde6LFvKYC9ZOEhJTkW9JhV+7VrIoTv1LyBi2s93kCIIPn23/WRNUg9nHTUqrY9hQEhy2JC1nPpyc3P+oBCCxGMG04Nxn37k0tNpZMTHru0JEqJob59p16pH1camNgP66nqi+4VL3TTLUOx9up5Tbu7+KWe9O2ipXmdJYGzGSWuX5iERTHA/eXrlE3sMgNgFhj8qEFM4nhxlLVJPd1hHBpATBgBdGJ9kNFLrE+U4A8eXMkz7t9Cs/vGxUPHbwHWFYcextcgUKQwd6F2c03VHm99Qdz0FuO9ffjYM9i9+Gzsm6oGwgyaPPig/lB306f6ts4JTxtJ+NbEHIU/I3GRrdTVOHH4Hd/uZNsiGymYSAGiw4tykgbROgF0kSKr5X+7NqXC1DggNG+RT/kV5+n6Klg2bDxiDcGeQ/oKl5vtH6+CpTrKgVk7VRP8yeT286Ob1p6CReyNbrgRLhW1peB23hlGzMdWDDzi5Yg2uXEIT96ijkGIVxKxapP8Fq2uUzaQJRTysnV+NoVv84vF4evEr3/U6hpXJ5lvKMg1ZSXmFHB1mtRQrOHEqhxweIHXKCLNNymS2hqxHqbr4MV2Ffa00JwYP8IBDWlZxYoBDAAFXRDd597gaqEAVuuQTORyoTnEXRkrMNs1WoVQGqZtgCJizHv9rrDR65TJGYVPcuDTlyc/4W3HsIgNS+G3D2Abs80S/lpdKTc+CP7p58mxwFzMJqnjpRCxLoPMGFmPWZXe7oxtOqJ5Pq1Iswj62IV209wUxdiV6wz2hSq9qy7GOqjHRO4nycBsRIEyf7VSLQSAYXheAa6UIFRdyO5ZhvR71uZznuK1/6bRuPsH5vGoQalbIXu8JKFNDMaMl3fjjyhCsDN1Z43bh6VQkFuzp3IlFOEtvzvHofvKahTNUH2AytYPfUrL1Wluz+WlktTtsm1MERaMHY0VcGl+NiJIk8PL5Xp0xv/2VGZ6PDaKVx7/hYz0yaHs0+Z73sVMNPpv5McwpIES80hBgvYzuxFfEnqbg9QYHSlIOOhQDUaXRoETxVQKxngIb2IGwsHrIkO8XKZUrdr1enBQwFYNR/tHNzUaBZjhde6lwEuW2Eb0FGyAUXatc3723cPnO1Y91mXBAP5PPEmtD19wxrjLFLux6z/mWrW9E1jlkWBmT0BDBhxW1f0kI2Kuem3+EIbfa3zAeDXERnGNxYjGi9dV6x+ooOFD0nzL8XXZrWAY9z3+jMzSyVCrGCtV2VsSgFsop8pOdNy/7YMiCqVNONUV2HWKhLPLaVkJfzUhLBbC05fCoD6tn/nfSpZ614RWIwm4wDk+n9TMXtAwDupbUyf6JpYeuWhueT/9Fug2ihF2re18rsi5s5OS7liTVdryNOrCAWo3JrxDBTK+8EQNaxqX7JA15KLaN95NvsHBYlVjgQt5g0kq/QF4DgTUgOfFtZIerYagg4R8Q/PzKZBWQGRKkVLypnLRPi1P39kY/5cvatA5qS1cQi/hj52Z0ssB7/pYI6e24R+zP7wbLfbT2tiPBE2IE+G/4gjT3tkjbpS5xnz8OIpk3awmgrepGzUsQPZNEqKs+m5yicaTYtqaKlnSfasxUaxwOi/T6KnK8Nod0dO2sKOcNLjVV/jYEqeigwxxAJsKmu37qy0dUfZdYkmfAAkFXGdiQKXGyGQTSH224G70xgxwnFvHvTyIyB/lz40hHPNQ+nZYgjj0HHwWLl0GPdBAwQLMOWJ03y2Z0VVQ20LGitXbPQr/3U+92xhRfxoIKOMtq9Qa2CXbwmVSOZzzj6mbB8l03dEZ4l7/hAfEKCVGHxmVy6DV8rO5TWPGR6KmZlCjcsN7b8bFNgFzH5LHW5DizdSZ0Wfg4UlBjeWDu/4GC9xPI5WAsxAs5e3RE5NQL6YkdcOh47b/ShSgSWr2ooc9jMCjYjF8UyfoGbEVmlp5ZS74rVbXbo4VLBOy68iAc9qGfjonoEp/0uu/9J+MjyUHJPhIu1lPSWwKcEPEbYqQJi80BLohiubL8UJLncYWLUzefrW4yBR3BXb8wMFfwJreyVNP4eaQv5JkRRrUVLfGIICEH2blMsOywZJEJX48drTLxhPJoN0RIvdrrE7LIBjtnBu++AA0Q63EZ+1ShnVp7I/IpG5jSGlueJNkZRPiVWLwiB38EG6vx3zVR/Y72hfN2kpcyNx6jKSsQ6zG0m2vSQBTGWZJjEW+IeYbNn6HmAP0b8qJijWH5n/ngpsf+eSrA1FvV5nWVSz66R23tRpkTzKRfgWlZXWO8F/qa17hVtumw2jECuOjQRGR/qFZZ57O71F12iKGuGkTkoqYSl1Bquf2QTpmhialyQN/wCMYv1bCtDRe5Q+fivXT3AJEnIPYOACKZspMEVDV00vs/MmsnASGJGhLsTYDwnWlOb6xslWvUIwUYJYVfPeF7Nq/KOUP4fb+H5eTMIOF7bkN4kqt9LBDlsYnMnDbnnpka11V5hnw5IKtLGU7blJbZg/yUmCE/4PkyDqAZxKGciRl+szgk68jx3skJ65BCdRvRq3pnMX4tH6xl3Rj6PihPbECV8uR4zG+3Flb3tC90hkQyQc4qAPpl8Z6DmuVpUK0BgutkEqjed0v6+bW93nqC7W2HXiBEMEoUN+yLc/WCgZgWnzsmafzpG4hW8lTUO+D/EOvw+Wvsp/fWaUMXm3BU+CZ9SExocwfHelQA7o6q3g4LRIHlXusop8rg+LMbnuj8e170WsnvFuMoR7AFeiKo2z2X41iN/mDmVfo+4dI66Kh+bM5d4kSY4BwCf8KtyKnr6z+ve1HwX6g4dsW548ikgVcF1nA+TAS7J4nkb+ApiFi9eOIwE2jiziSe8Ky9EQyDjBhFnwuPlSgGxVcNx5zeP1zx+fMWaNJArl5BVxxqHllHLQlY231URHIRzI53a8NRRVJiMkTGYCzlBsqsr6LzxBSyCAKkoy+6wDn3odmCnpSE9+f4ocnYDFUieS9mZpPVXxKDaAoA0CjRcc+YyKFQiFiGVYUA8a48IuBNP5AL02UTN07K4q4mAnWnw5okilk+18mMnz2PlNO6kXnx3vi85zaPBlymea5H0jzjEZ/ePc2dgPxaYONalmAX+vbka48Gl+f20ACMMcoc4zAELUoLIIQGPfkXs8W6gwwoHEmd6IYKKP/CeHR8aoDbylLSBFY3N05KvAUx5VJ20w+jcB5wQZ8BDA+/AbB8htu16zAIBhjbiZj0ifbD/nZF8Gd7zJPJGmgyakbcB3OOJ4bjHTDFDuzHM0TF5tQLflSu/SVd5IxY7Nn2bILFK+3SSlJzkTAxz4fzq/h51K2EEb5MzmM/NM9jRzS/oMA+QiPKZzGkTxo2n95r1mLLox1BWuwAzi/X9eoqlaNWf/QEkgCTOnz0IpBgDp0fWH8GR0a05d5g/9A9iDF8wAewCs8CVGydXBlvR4GXhzmvr0DfXKivkU1Yqf2JnLg3i4tvLXzZpleTr+Eix4+K/UImhxigkbhqjfK8mVrB6Mu0fdS5+86/b7VK2oW4Wuey8Q/IgIGn38De4vCzeXGLE3Kop/ZrjAQm2LL+KYcNGU6N4YGgSdwfKjFgA546CCNlcQdZXahWsHTOywWtZwwYmi0XZJD6ZcqJTZ3OMRLYK/hA/g5f+ByZ+YujZjAE5KCHPc3kEMdMog0lWDAsvXsdCMwHR/5r4Dabk87Vuf6YKaenWWpsFuQNjGRo5wI9gJlPmdpj8qHiQb4Fq90gAA18bJCAIa/3+eqfUjyZONXwOcRsWsTcsZaVzZ6FqAKu0F+8uJVJqav4OxTFFPkDuWK1ik7+J+oxHg4AMTb062U0859GnDuHGPd12h5n/OHGoSS/dxAAcwFC4Vy/8mpVRf+XF5MMUti7Fsf3BY7SPodKW81g0IE7+CQyDDews22t3/r9tvEcbD00oc1DKkqCrSmDqxtitw51Bbc5Vl+s1PBNGebw5e4nGpB9wfJfy1Qn4o3AhWJCZGDyxXJ8hZ8eSPCVpFKrMh53Hb6bJDSCGOv9Js81LWtRDTbGDShfSpUOpzJmaORJmdJOxQaVNmFdkH40S3TMwRVF+9vT0lc6DE17/Ij4kuXV20P3gsiDF/pyPPiUymVbPxFB2sN/WMv8Gzm8jsIXrbnkRR6ayB0NdABE7QTTDOVcTF0MkUrsCGqmwxo40P/cvzSoKvbJi8eys7A3PqrTGYnD/TK+lZiZXoXVsnHEHV8PETDP9QukL8AbsZCwX7fGBihj5f7jY4BJmdSlrpCVmLoPt1waEVpNl5DhsoGM2xbbBiaSE0XTuICWYzGUndgHYvqwyaInfvDHrA0WeyGUF7BScOnp+W8iATUIoWUB+EvdS+cebW9mpZzTSwC6Bic8Jt3iXLMp/RuUhQb6UftoxPEDvrLvVXPPTh/weot/53UyBSFGudpuVNu9/c/TvRE1zXEd6hoc2jsVyu6F5OlRs86rsZscS+NNekVg1BM80/FLMpvR/vOXBTnrv97sAMin/nADHq9Kx/smURz5I5YiWZJivP0ljor+0ABC4aY1q3pjDaph7M+g27wT4cglZTXEu+FRdw4vlcpZxq/+4FTenMNuX2pzRWa3WOvs3cv4xGOby54OfDwfCA1aV7sW/eNZ0XUe5WGwmfnFRrR5AIG9ASioyFk20xfi0H3xZ//eUR7AY+FOJu3mgU//6+gzW+nBbRkhFGWt9IQ6Pm6SiJtW5wVfT8mrV/DiXqe8kW/zghwh18F0Qc4g/BSKzfZMy07pYxav2kkuEI/T1cn7HGrnLmxFQgyKTyesalZ9E8ZNoayBpHjDiNSCkcEblTgeqzkW7Xw2cpa/UbQ8lYAIa10wcGIoPkPe3Tkgst4a9w7+uIYlCPKzG9lnSMXPUX2weoXvmauosyZ0tW5Z1vVxiEhf2IbHEacjaviR7N2aitjFNSt2X8/QOicqhC9HelLJk6dBo6Hh+/5hSpZSJ4ZZcomNrUA6MO/JmYcAjvtPHgUDogrk5i2eWCq/Jt7Yxy+825hm5odHdq+yQRtg7m/PLywJ34Ecc9wbeKYkxlPkD/y+vFwViuKecamFbyxC4dlWD1Polg9efvGQRsNBSeiOxMGf0LKmF8g6ppPZ25Hip+Aamob2hfmxKZcuwiaj3vl97b7hmagnV14+TbvZurcMcnVkENjr+8vg64C3v1zX66peRPY6qBatkPw4XTvGr2n4IY0lKEjBm68/OAIK3tYQqlAQ+504DTsU2mzxKEpKdAnj3ku5N7LQ8e4t8P38qpedw8VIz4zFm/NMSoBThrl9pTrzdhj3Qp/l6GEi6pTdlo8pCaCxFP96WPfDGj670y5QAd7SLaIx/6uyaoBVw/CAmQvyqbScZ3M9d4qLHtZj54PPc5xVabcUFVF2gJ2E5EMvtfw+1JQWRcob1AnURzUvpGWB1UpQjA77zNfNUPQn+weh4+7DAzaCR5er3wZad2R3vnHeGYc6R4f6OLSNp3lkWf5fXgA5ywjfq5TIDO0CC8LLg9ngXf+3nQiNUe0hDiyx3/5YY2AjnD8yKPdTSzsrP9t4BCw0oOPy1UrzhPTMgDM6ddUbPQ3PAZdLBiQXWaA4PMHMhJm1mSI19EIs6v7pF9fXziXn8YwjXrfuzzs9/yG6gr6EMnc4LVtiIA0BO9QdykEZeIpTq0UPax/oeEukhdkwf7Y+tXK4HG5yUbH2z3qRNvdSpSnktFmfH8YsEJnxPEBQ+wRSvlfrn6glqXkgOY83p6XPH/zPB6Ph1YFSTcdDboXiE0XTsaQ2W6okw4jfymL/TvhAqDg4KERZVZG/wrTxX5tlQMQoWv/AXDRIu3WCq+IFQz6kiUtzmgGRzRJNb+z7lLuHGQLCw92ZNuGZy56/WAMb02ZNVJgFk+JkJ4Ve0M3uK1XZEpHM6qzmmn9mYMK0w+xdKwmTPVsllPbc5/oUHTS009bggDXvuZ9q2lC0JfxaVqPCDbiMSNn7wna2JTNpcZ4/6NrY1qObWtRa4/swhtH/Pfu0lVJlnzjVkEhHnwMnuhNt/to1fx7UoPpIjlqhVFVnLsXHhzcXuWJxZ+/pWZ3dd+fqtRHsSyT8FxYSkNqPV2Ua6II4w/gdVFIhpdTqFiIszaW3UOGuD9rLgWZL7KlnnHFSAafk8qGbDplcBCxx8fCeKQtUxXtPF4odD5NTHhxz/7RsEBxZIAYPjcuvvO7bJ8pepwtWjPRo246AUw5ZUL7d1FbyesOPAIF14XNE8FoWoQXAZpbeBUB//j5Gfb6zonQZZ8IA5d+Q/QvfgBg6rSQCLK6vFaC4u/GQw1Rq3aENmOsVYYH9K7mjdvNkAECPZHuHmiitPLe5LwBB8WdXWEC35z6b82AOKko7zCbb41fz5/FPpsGtjIiMkLyZZrOfqdslOmPFG9EDyno3kabv34aiU1BclHNrqZYoRf1C21Z5oXkEy/uBy8Gn+ObpXHWEj3VN/1eq2v00oM9XzPpt22Fur5vn+nBjtf34I/oTaCnip3EeXUEG9nJNNxtmFpKolS7Bv3gH5erslZjxsS5EtThdhHuiYkwmsriKRq9Zdo9OamCpBcT1SoahiAAdgJPvIYaoWnefsMPxampAAAAAA';
app.innerHTML = `
  <header class="site-header">
    <div class="brand">
      <span class="brand-mark">STONE</span>
      <span class="brand-name">LOADS</span>
    </div>

    <nav class="nav-links">
      <a href="#marketplace">Marketplace</a>
      <a href="#">Stone Types</a>
      <a href="#">About</a>
      <a href="#">Contact</a>
      <a href="#" class="nav-cta">Request a Load</a>
    </nav>

    <a href="#pricing" class="login-link">Log in for Wholesale Pricing</a>
  </header>

  <main>
    <section class="filters" id="marketplace">
      <input type="search" placeholder="Search for flagging, steps, etc..." />
      <div class="filter-buttons">
        <button id="lioz-btn">Lios</button>
        <button id="mulenos-btn">Mulenos</button>
        <button>Category</button>
        <button>Status</button>
        <button>Size</button>
        <button>Supplier</button>
        <button>Availability</button>
        <button>Price</button>
        <button>Region</button>
      </div>
    </section>

    <section id="lioz-panel" class="lioz-panel hidden">
      <div class="lioz-scroller">
        <div class="lioz-grid" id="lioz-grid">
          <div class="frame-card">
            <div class="frame-inner">
              <img class="et-marquina-img" src="https://natstone.pt/wp-content/uploads/2019/09/NMN.jpg" alt="Mulenos Frame 1" />
              <p class="frame-caption">Frame 1</p>
            </div>
          </div>
          <div class="frame-card">
            <div class="frame-inner">
              <img src="https://www.marmores-luisgomes.pt/uploads/canais_temas/icon[29].jpg" alt="Lioz Red Stone" />
              <p class="frame-caption">Lioz Red</p>
            </div>
          </div>
          <div class="frame-card">
            <div class="frame-inner">
              <img src="https://www.marmores-luisgomes.pt/uploads/canais_artigos_galeria/foto[231].jpg" alt="Mulenos" />
              <p class="frame-caption">Mulenos</p>
            </div>
          </div>
          <div class="frame-card">
            <div class="frame-inner">
              <img src="https://www.marmores-luisgomes.pt/uploads/canais_artigos_galeria/foto[229].jpg" alt="Mulenos" />
              <p class="frame-caption">Mulenos</p>
            </div>
          </div>
          <div class="frame-card">
            <div class="frame-inner">
              <img src="https://www.stoneexpertise.com/image.php?image=lioz-classico-95900859.jpg&maxwidth=2400" alt="Lioz Classico frame 6" />
              <p class="frame-caption">Frame 6</p>
            </div>
          </div>
          <div class="frame-card">
            <div class="frame-inner">Frame 7</div>
          </div>
          <div class="frame-card">
            <div class="frame-inner">Frame 8</div>
          </div>
        </div>
      </div>
    </section>

    <section class="popular" id="pricing">
      <h2>Our Products</h2>
      <div class="product-grid">
        <article class="product-card">
          <div class="image-wrap">
            <img src="https://www.sigma3.co.uk/_userfiles/images/luna-heritage-grey-ow-esher-2.jpg" alt="Frame 4" />
          </div>
          <div class="product-details">
            <p class="supplier">Local Product</p>
          </div>
        </article>

        <article class="product-card">
          <div class="image-wrap">
            <img src="${frame3ImageDataUri}" alt="Frame 3" />
          </div>
          <div class="product-details">
            <p class="supplier">Local Product</p>
          </div>
        </article>

        <article class="product-card">
          <div class="image-wrap">
            <img src="https://marmotomas.com/wp-content/uploads/2021/08/WhatsApp-Image-2021-05-27-at-17.02.51-4-768x768.jpeg" alt="Landscaper Specimen 3000 lbs" />
          </div>
          <div class="product-details">
            <p class="supplier">Local Product</p>
            <p class="product-title">Landscaper Specimen 3000 lbs</p>
          </div>
        </article>

        <article class="product-card">
          <div class="image-wrap">
            <img src="https://marmotomas.com/wp-content/uploads/2021/08/WhatsApp-Image-2021-05-27-at-17.02.50-3-768x768.jpeg" alt="Landscape 500-1000 lbs" />
          </div>
          <div class="product-details">
            <p class="supplier">Local Product</p>
            <p class="product-title">Landscape 500-1000 lbs</p>
          </div>
        </article>

        <article class="product-card">
          <div class="image-wrap">
            <img src="https://images.unsplash.com/photo-1443890923422-7819ed4101c0?auto=format&fit=crop&w=800&q=80" alt="Landscaper 3000 lbs 8-12 per pallet" />
          </div>
          <div class="product-details">
            <p class="supplier">Local Product</p>
            <p class="product-title">Landscaper 3000 lbs 8-12 per pallet</p>
          </div>
        </article>

        <article class="product-card out-of-stock">
          <div class="image-wrap">
            <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80" alt="Flint Hills Gray thin veneer" />
            <span class="stock-badge">Out of stock</span>
          </div>
          <div class="product-details">
            <p class="supplier">Supplier Hidden - KS</p>
            <p class="product-title">Flint Hills Gray/Plaza Gray thin veneer Rumble/ashlar pattern</p>
          </div>
        </article>
      </div>

    </section>

    <section class="supplier-products">
      <div class="section-header">
        <h2>Other products from this supplier</h2>
        <span class="product-count">12 Products</span>
      </div>

      <div class="product-grid supplier-grid">
        <article class="product-card">
          <div class="image-wrap">
            <img src="https://images.unsplash.com/photo-1545259742-9bf7e9d72d33?auto=format&fit=crop&w=800&q=80" alt="Oklahoma moss waterfall 1"-"3" />
          </div>
          <div class="product-details">
            <p class="supplier">Texanna, OK</p>
            <p class="product-title">Oklahoma moss waterfall 1"-3"</p>
          </div>
        </article>

        <article class="product-card">
          <div class="image-wrap">
            <img src="https://images.unsplash.com/photo-1495562569060-2eec283d3391?auto=format&fit=crop&w=800&q=80" alt="Oklahoma moss builders 3"-"5" />
          </div>
          <div class="product-details">
            <p class="supplier">Texanna, OK</p>
            <p class="product-title">Oklahoma moss builders 3"-5"</p>
          </div>
        </article>

        <article class="product-card">
          <div class="image-wrap">
            <img src="https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=800&q=80" alt="1-1.25 premium oklahoma flagstone" />
          </div>
          <div class="product-details">
            <p class="supplier">Texanna, OK</p>
            <p class="product-title">1"-1.25" premium oklahoma flagstone</p>
          </div>
        </article>

        <article class="product-card">
          <div class="image-wrap">
            <img src="https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=800&q=80" alt="Oklahoma Thin Veneer Squares and Recs Brown" />
          </div>
          <div class="product-details">
            <p class="supplier">Texanna, OK</p>
            <p class="product-title">Oklahoma Thin Veneer Squares and Recs. Brown</p>
          </div>
        </article>
      </div>
    </section>

    <button class="floating-chat" aria-label="Chat with us">
      <span>💬</span>
    </button>

    <footer class="site-footer">
      <div class="footer-top">
        <div class="footer-section">
          <h3>Company</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About us</a></li>
            <li><a href="#">Careers</a></li>
          </ul>
        </div>
        <div class="footer-section">
          <h3>Insights</h3>
          <ul>
            <li><a href="#">Merchandise</a></li>
            <li><a href="#">Community</a></li>
          </ul>
        </div>
        <div class="footer-section">
          <h3>Industries</h3>
          <ul>
            <li><a href="#">Services</a></li>
            <li><a href="#">Contact us</a></li>
          </ul>
        </div>
        <div class="footer-section footer-contact">
          <p><a href="#">Direction on Google</a></p>
          <p><strong>Email</strong><br/><a href="mailto:contact@unitedcarriers.com">contact@unitedcarriers.com</a></p>
          <p><strong>Hotline</strong><br/>1300 000 082</p>
          <p><strong>Office Hours</strong><br/>Monday - Friday / 8:30AM - 5PM</p>
        </div>
      </div>
      <div class="footer-bottom">
        <span>All prices in AUD, inclusive of GST. Powered by Stripe.</span>
      </div>
    </footer>

    <div class="image-modal hidden" id="image-modal">
      <button class="modal-nav left" id="modal-prev" type="button" aria-label="Previous image">&lt;</button>
      <button class="modal-close" id="modal-close" aria-label="Close">×</button>
      <img id="modal-img" src="" alt="" />
      <button class="modal-nav right" id="modal-next" type="button" aria-label="Next image">&gt;</button>
    </div>

  </main>
`;

// Enlarge any frame card image on click
const imageModal = document.getElementById('image-modal');
const modalImg = document.getElementById('modal-img');
const modalClose = document.getElementById('modal-close');
const modalPrev = document.getElementById('modal-prev');
const modalNext = document.getElementById('modal-next');
const liozImages = Array.from(document.querySelectorAll('#lioz-grid .frame-card img'));
const productImages = Array.from(document.querySelectorAll('#pricing .product-card img'));
let activeImages = liozImages;
let activeImageIndex = 0;

function showModalImage(index) {
  if (!activeImages.length) return;
  const safeIndex = (index + activeImages.length) % activeImages.length;
  activeImageIndex = safeIndex;
  const activeImage = activeImages[safeIndex];
  modalImg.src = activeImage.src;
  modalImg.alt = activeImage.alt;
}

function openModalWithIndex(index, images) {
  activeImages = images;
  showModalImage(index);
  imageModal.classList.remove('hidden');
}

function closeModal() {
  imageModal.classList.add('hidden');
}

function bindImagesToModal(images) {
  images.forEach((img, index) => {
    img.style.cursor = 'pointer';
    img.addEventListener('click', () => {
      openModalWithIndex(index, images);
    });
  });
}

bindImagesToModal(liozImages);
bindImagesToModal(productImages);

modalClose.addEventListener('click', closeModal);
if (modalPrev && modalNext) {
  modalPrev.addEventListener('click', () => showModalImage(activeImageIndex - 1));
  modalNext.addEventListener('click', () => showModalImage(activeImageIndex + 1));
}

document.addEventListener('keydown', e => {
  if (imageModal.classList.contains('hidden')) return;
  if (e.key === 'ArrowLeft') showModalImage(activeImageIndex - 1);
  if (e.key === 'ArrowRight') showModalImage(activeImageIndex + 1);
  if (e.key === 'Escape') closeModal();
});

imageModal.addEventListener('click', e => {
  if (e.target === imageModal) closeModal();
});

// Toggle Lioz panel when the button is clicked
const liozBtn = document.getElementById('lioz-btn');
const mulenosBtn = document.getElementById('mulenos-btn');
const liozPanel = document.getElementById('lioz-panel');

function toggleLiozPanel(triggerButton) {
  if (!liozPanel || !triggerButton) return;
  triggerButton.addEventListener('click', () => {
    liozPanel.classList.toggle('hidden');
    const isOpen = String(!liozPanel.classList.contains('hidden'));
    if (liozBtn) liozBtn.setAttribute('aria-expanded', isOpen);
    if (mulenosBtn) mulenosBtn.setAttribute('aria-expanded', isOpen);
  });
}

toggleLiozPanel(liozBtn);
toggleLiozPanel(mulenosBtn);

const filterButtons = Array.from(document.querySelectorAll('.filter-buttons button'));

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    filterButtons.forEach(item => item.classList.remove('active'));
    button.classList.add('active');
  });
});




