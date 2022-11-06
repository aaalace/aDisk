from pprint import pprint


par = {
    0: {
        0: 0,
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0,
        6: 0,
        7: 0,
        8: 0,
        9: 0,
        10: 0,
    },
    1: {
        0: 0,
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0,
        6: 0,
        7: 0,
        8: 0,
        9: 0,
        10: 0,
    },
    2: {
        0: 0,
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0,
        6: 0,
        7: 0,
        8: 0,
        9: 0,
        10: 0,
    },
}

with open('27-B.txt') as f:
    ls = list(map(lambda x: int(x), f.read().splitlines()))
    for el in ls:
        mod = el % 3
        max_deg = 0
        for deg in range(10, -1, -1):
            if el % deg == 0:
                max_deg = deg
                break
        par[mod][max_deg] += 1

pprint(par)

ans = 0
for key1, val1 in par.items():
    if key1 == 0:
        for key2, val2 in val1.items():
            pass
    if key1 == 1:
        for key2, val2 in val1.items():
            pass
    if key1 == 2:
        for key2, val2 in val1.items():
            pass
