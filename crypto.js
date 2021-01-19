var aesObj = function() {
        function t(b) {
            for (var c = "", a = 0; a < b.length; a++) b.charAt(a) != " " && (c += b.charAt(a));
            return c
        }

        function a(b, d) {
            for (var a = 0; b > 0;)(b & 1) != 0 && (a ^= d), b >>>= 1, d <<= 1;
            for (var c = 65536, e = 72448; c >= 256;)(a & c) != 0 && (a ^= e), c >>= 1, e >>= 1;
            return a
        }

        function u(b) {
            for (var a = 0; a < 16; a++) b[a] = r[b[a]];
            return b
        }

        function v(b) {
            for (var d = Array(4), e = b.length / 4, j = e + 6, f = Array(4 * (j + 1)), c = 0; c < b.length; c++) f[c] =
                b[c];
            for (c = e; c < 4 * (j + 1);) {
                for (b = 0; b < 4; b++) d[b] = f[(c - 1) * 4 + b];
                if (c % e == 0) {
                    var d = [d[1], d[2], d[3], d[0]],
                        b = d = u(d),
                        k = b[0],
                        g = c / e,
                        h = 2,
                        i = 1;
                    for (g--; g > 0;)(g & 1) != 0 && (i = a(i, h)), h = a(h, h), g >>= 1;
                    b[0] = k ^ i
                } else e > 6 && c % e == 4 && (d = u(d));
                for (b = 0; b < 4; b++) f[c * 4 + b] = f[(c - e) * 4 + b] ^ d[b];
                c++
            }
            return f
        }

        function k(b, c) {
            for (var a = 0; a < 16; a++) b[a] = c[b[a]];
            return b
        }

        function w(a) {
            var b, c, j, k;
            b = a[l];
            c = a[m];
            j = a[n];
            k = a[o];
            a[l] = c;
            a[m] = j;
            a[n] = k;
            a[o] = b;
            b = a[p];
            c = a[q];
            j = a[d];
            k = a[e];
            a[p] = j;
            a[q] = k;
            a[d] = b;
            a[e] = c;
            b = a[f];
            c = a[g];
            j = a[h];
            k = a[i];
            a[f] = k;
            a[g] = b;
            a[h] = c;
            a[i] = j;
            return a
        }

        function x(a) {
            var b, c, j, k;
            b = a[l];
            c = a[m];
            j = a[n];
            k = a[o];
            a[l] = k;
            a[m] = b;
            a[n] = c;
            a[o] = j;
            b = a[p];
            c = a[q];
            j = a[d];
            k = a[e];
            a[p] = j;
            a[q] = k;
            a[d] = b;
            a[e] = c;
            b = a[f];
            c = a[g];
            j = a[h];
            k = a[i];
            a[f] = c;
            a[g] = j;
            a[h] = k;
            a[i] = b;
            return a
        }

        function c(b, c, d) {
            for (var a = 0; a < 4; a++) b[0 + a] ^= c[d + a * 4], b[4 + a] ^= c[d + a * 4 + 1], b[8 + a] ^= c[d + a * 4 +
                2], b[12 + a] ^= c[d + a * 4 + 3];
            return b
        }

        function j(d) {
            for (var a, c = Array(16), b = 0; b < 4; b++)
                for (a = 0; a < 4; a++) c[b * 4 + a] = d[a * 4 + b];
            return c
        }

        function s(f) {
            for (var e = Array(f.length / 2), d = 0; d < f.length / 2; d++) {
                var g = e,
                    h = d,
                    c;
                a: {
                    c = f.substr(d * 2, 2);
                    var b = c.charCodeAt(0);
                    if (b >= 48 && b <= 57) b -= 48;
                    else if (b >= 65 && b <= 70) b -= 55;
                    else if (b >= 97 && b <= 102) b -= 87;
                    else {
                        window.alert(c.charAt(1) + " is not a valid hex digit");
                        c = -1;
                        break a
                    }
                    var a = c.charCodeAt(1);
                    if (a >= 48 && a <= 57) a -= 48;
                    else if (a >= 65 && a <= 70) a -= 55;
                    else if (a >= 97 && a <= 102) a -= 87;
                    else {
                        window.alert(c.charAt(2) + " is not a valid hex digit");
                        c = -1;
                        break a
                    }
                    c = b * 16 + a
                }
                g[h] = c;
                if (e[d] < 0) {
                    e[0] = -1;
                    break
                }
            }
            return e
        }

        function z(a) {
            return a.replace(/(\\u)(\w{4}|\w{2})/gi, function(b, c, a) {
                return String.fromCharCode(parseInt(a, 16))
            })
        }
        instance = this;
        aesObj = function() {
            return instance
        };
        var r = [99, 124, 119, 123, 242, 107, 111, 197, 48, 1, 103, 43, 254, 215, 171, 118, 202, 130, 201, 125, 250, 89,
                71, 240, 173, 212, 162, 175, 156, 164, 114, 192, 183, 253, 147, 38, 54, 63, 247, 204, 52, 165, 229, 241,
                113, 216, 49, 21, 4, 199, 35, 195, 24, 150, 5, 154, 7, 18, 128, 226, 235, 39, 178, 117, 9, 131, 44, 26,
                27, 110, 90, 160, 82, 59, 214, 179, 41, 227, 47, 132, 83, 209, 0, 237, 32, 252, 177, 91, 106, 203, 190,
                57, 74, 76, 88, 207, 208, 239, 170, 251, 67, 77, 51, 133, 69, 249, 2, 127, 80, 60, 159, 168, 81, 163,
                64, 143, 146, 157, 56, 245, 188, 182, 218, 33, 16, 255, 243, 210, 205, 12, 19, 236, 95, 151, 68, 23,
                196, 167, 126, 61, 100, 93, 25, 115, 96, 129, 79, 220, 34, 42, 144, 136, 70, 238, 184, 20, 222, 94, 11,
                219, 224, 50, 58, 10, 73, 6, 36, 92, 194, 211, 172, 98, 145, 149, 228, 121, 231, 200, 55, 109, 141, 213,
                78, 169, 108, 86, 244, 234, 101, 122, 174, 8, 186, 120, 37, 46, 28, 166, 180, 198, 232, 221, 116, 31,
                75, 189, 139, 138, 112, 62, 181, 102, 72, 3, 246, 14, 97, 53, 87, 185, 134, 193, 29, 158, 225, 248, 152,
                17, 105, 217, 142, 148, 155, 30, 135, 233, 206, 85, 40, 223, 140, 161, 137, 13, 191, 230, 66, 104, 65,
                153, 45, 15, 176, 84, 187, 22
            ],
            y = [82, 9, 106, 213, 48, 54, 165, 56, 191, 64, 163, 158, 129, 243, 215, 251, 124, 227, 57, 130, 155, 47,
                255, 135, 52, 142, 67, 68, 196, 222, 233, 203, 84, 123, 148, 50, 166, 194, 35, 61, 238, 76, 149, 11, 66,
                250, 195, 78, 8, 46, 161, 102, 40, 217, 36, 178, 118, 91, 162, 73, 109, 139, 209, 37, 114, 248, 246,
                100, 134, 104, 152, 22, 212, 164, 92, 204, 93, 101, 182, 146, 108, 112, 72, 80, 253, 237, 185, 218, 94,
                21, 70, 87, 167, 141, 157, 132, 144, 216, 171, 0, 140, 188, 211, 10, 247, 228, 88, 5, 184, 179, 69, 6,
                208, 44, 30, 143, 202, 63, 15, 2, 193, 175, 189, 3, 1, 19, 138, 107, 58, 145, 17, 65, 79, 103, 220, 234,
                151, 242, 207, 206, 240, 180, 230, 115, 150, 172, 116, 34, 231, 173, 53, 133, 226, 249, 55, 232, 28,
                117, 223, 110, 71, 241, 26, 113, 29, 41, 197, 137, 111, 183, 98, 14, 170, 24, 190, 27, 252, 86, 62, 75,
                198, 210, 121, 32, 154, 219, 192, 254, 120, 205, 90, 244, 31, 221, 168, 51, 136, 7, 199, 49, 177, 18,
                16, 89, 39, 128, 236, 95, 96, 81, 127, 169, 25, 181, 74, 13, 45, 229, 122, 159, 147, 201, 156, 239, 160,
                224, 59, 77, 174, 42, 245, 176, 200, 235, 187, 60, 131, 83, 153, 97, 23, 43, 4, 126, 186, 119, 214, 38,
                225, 105, 20, 99, 85, 33, 12, 125
            ],
            l = 4,
            m = 5,
            n = 6,
            o = 7,
            p = 8,
            q = 9,
            d = 10,
            e = 11,
            f = 12,
            g = 13,
            h = 14,
            i = 15,
            b = Array(16);
        this.encryptbyaes = function(z, y) {
            for (var u = y, f = "", i = "", e = 0, x = u.length; e < x; e++) f = u.charCodeAt(e).toString(16), i +=
                "\\u" + Array(5 - f.length).join("0") + f;
            y = i;
            u = s(z);
            f = y;
            i = Array(16);
            f.length > 16 && (i = Array(f.length));
            if (f.length >= 16)
                for (e = 0; e < f.length; e++) i[e] = f.charCodeAt(e);
            else {
                for (e = 0; e < f.length; e++) i[e] = f.charCodeAt(e);
                for (e = f.length; e < 16; e++) i[e] = 0
            }
            f = i;
            x = "";
            i = f.length / 16;
            for (e = 0; e < i; e++) {
                var h, m = u,
                    g = f.slice(e * 16, (e + 1) * 16);
                h = Array(44);
                var d = Array(16),
                    l = void 0;
                if (g[0] < 0) h = void 0;
                else if (m[0] < 0) h = void 0;
                else {
                    h = v(m);
                    m = m.length / 4 + 6;
                    d = j(g);
                    d = c(d, h, 0);
                    for (l = 1; l < m; l++) {
                        for (var d = k(d, r), g = d = w(d), n = d = void 0, o = void 0, p = void 0, q = void 0, d =
                                0; d < 4; d++) n = g[0 + d], o = g[4 + d], p = g[8 + d], q = g[12 + d], g[0 + d] =
                            a(2, n) ^ a(3, o) ^ p ^ q, g[4 + d] = n ^ a(2, o) ^ a(3, p) ^ q, g[8 + d] = n ^ o ^ a(2,
                                p) ^ a(3, q), g[12 + d] = a(3, n) ^ o ^ p ^ a(2, q);
                        d = g;
                        d = c(d, h, l * 16)
                    }
                    k(d, r);
                    w(d);
                    c(d, h, m * 16);
                    b = j(d);
                    h = (b[0] >>> 4 & 15).toString(16) + (b[0] & 15).toString(16);
                    for (l = 1; l < 16; l++) h += (b[l] >>> 4 & 15).toString(16) + (b[l] & 15).toString(16)
                }
                x += h
            }
            return t(x)
        };
        this.decryptbyaes = function(q, p) {
            for (var r = s(q), p = t(p), l = "", u = p.length / 32, f = 0; f < u; f++) {
                var h, i = r,
                    e = p.slice(f * 32, (f + 1) * 32);
                h = Array(44);
                var d = Array(16),
                    g = void 0,
                    e = s(e);
                if (e[0] < 0) h = void 0;
                else if (i[0] < 0) h = void 0;
                else {
                    h = v(i);
                    g = i.length / 4 + 6;
                    d = j(e);
                    d = c(d, h, g * 16);
                    for (g -= 1; g >= 1; g--) {
                        for (var d = x(d), d = k(d, y), e = d = c(d, h, g * 16), m = i = d = void 0, n = void 0, o =
                                void 0, d = 0; d < 4; d++) i = e[0 + d], m = e[4 + d], n = e[8 + d], o = e[12 + d],
                            e[0 + d] = a(14, i) ^ a(11, m) ^ a(13, n) ^ a(9, o), e[4 + d] = a(9, i) ^ a(14, m) ^ a(
                                11, n) ^ a(13, o), e[8 + d] = a(13, i) ^ a(9, m) ^ a(14, n) ^ a(11, o), e[12 + d] =
                            a(11, i) ^ a(13, m) ^ a(9, n) ^ a(14, o);
                        d = e
                    }
                    x(d);
                    k(d, y);
                    c(d, h, 0);
                    b = j(d);
                    h = "";
                    for (g = 0; g < 16; g++) h += String.fromCharCode(b[g])
                }
                l += h
            }
            for (f = l.length - 1; f >= 0; f--)
                if (l.charCodeAt(f) > 31 && l.charCodeAt(f) < 128) break;
            return z(l.substring(0, f + 1))
        };
        this.generatebyaes = function() {
            for (var a = "", b = 0; b < 32; b++) a += "0123456789abcdef".charAt(Math.floor(Math.random() * 16));
            return a
        }
    },
    base64Obj = function() {
        instance = this;
        base64Obj = function() {
            return instance
        };
        var b = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T",
                "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",
                "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
                "+", "/"
            ],
            d = function(a) {
                for (var b = []; a > 0;) {
                    var c = a % 2,
                        a = Math.floor(a / 2);
                    b.push(c)
                }
                b.reverse();
                return b
            },
            c = function(c) {
                for (var d = 0, b = 0, a = c.length - 1; a >= 0; --a) c[a] == 1 && (d += Math.pow(2, b)), ++b;
                return d
            },
            a = function(c, d) {
                for (var a = 8 - (c + 1) + (c - 1) * 6 - d.length; --a >= 0;) d.unshift(0);
                for (var a = [], b = c; --b >= 0;) a.push(1);
                a.push(0);
                for (var b = 0, e = 8 - (c + 1); b < e; ++b) a.push(d[b]);
                for (e = 0; e < c - 1; ++e) {
                    a.push(1);
                    a.push(0);
                    for (var f = 6; --f >= 0;) a.push(d[b++])
                }
                return a
            };
        this.encryptbybase64 = function(j) {
            for (var k = [], e = [], f = 0, i = j.length; f < i; ++f) {
                var g = j.charCodeAt(f),
                    h = d(g);
                if (g < 128) {
                    for (g = 8 - h.length; --g >= 0;) h.unshift(0);
                    e = e.concat(h)
                } else g >= 128 && g <= 2047 ? (e = e.concat(a(2, h))) : g >= 2048 && g <= 65535 ? (e = e.concat(a(
                        3, h))) : g >= 65536 && g <= 2097151 ? (e = e.concat(a(4, h))) : g >= 2097152 && g <=
                    67108863 ? (e = e.concat(a(5, h))) : g >= 4e6 && g <= 2147483647 && (e = e.concat(a(6, h)))
            }
            f = j = 0;
            for (i = e.length; f < i; f += 6) {
                h = f + 6 - i;
                h == 2 ? (j = 2) : h == 4 && (j = 4);
                for (h = j; --h >= 0;) e.push(0);
                k.push(c(e.slice(f, f + 6)))
            }
            e = "";
            f = 0;
            for (i = k.length; f < i; ++f) e += b[k[f]];
            f = 0;
            for (i = j / 2; f < i; ++f) e += "=";
            return e
        };
        this.decryptbybase64 = function(e) {
            var f = e,
                e = f.length,
                g = 0;
            f.charAt(e - 1) == "=" && (f.charAt(e - 2) == "=" ? (g = 4, f = f.substring(0, e - 2)) : (g = 2, f = f.substring(
                0, e - 1)));
            for (var e = [], a = 0, j = f.length; a < j; ++a)
                for (var h = f.charAt(a), i = 0, k = b.length; i < k; ++i)
                    if (h == b[i]) {
                        h = d(i);
                        i = h.length;
                        if (6 - i > 0)
                            for (i = 6 - i; i > 0; --i) h.unshift(0);
                        e = e.concat(h);
                        break
                    } g > 0 && (e = e.slice(0, e.length - g));
            f = [];
            g = [];
            a = 0;
            for (j = e.length; a < j;)
                if (e[a] == 0) f = f.concat(c(e.slice(a, a + 8))), a += 8;
                else {
                    for (h = 0; a < j;) {
                        if (e[a] == 1) ++h;
                        else break;
                        ++a
                    }
                    g = g.concat(e.slice(a + 1, a + 8 - h));
                    for (a += 8 - h; h > 1;) g = g.concat(e.slice(a + 2, a + 8)), a += 8, --h;
                    f = f.concat(c(g));
                    g = []
                } e = f;
            a = "";
            j = 0;
            for (f = e.length; j < f; ++j) a += String.fromCharCode(e[j]);
            return a
        }
    },
    charSet = function() {
        this.parseUTF8 = function(b) {
            for (var b = unescape(encodeURIComponent(b)), c = b.length, d = [], a = 0; a < c; a++) d[a >>> 2] |= (b
                .charCodeAt(a) & 255) << 24 - a % 4 * 8;
            return new WordArray(d, c)
        };
        this.stringifyUTF8 = function(a) {
            try {
                for (var e = decodeURIComponent, f = escape, c, h = a.words, g = a.sigBytes, a = [], b = 0; b < g; b++) {
                    var d = h[b >>> 2] >>> 24 - b % 4 * 8 & 255;
                    d != 0 && a.push(String.fromCharCode(d))
                }
                c = a.join("");
                return e(f(c))
            } catch (i) {
                throw Error("Malformed UTF-8 data");
            }
        };
        this.HexParse = function(b) {
            for (var c = b.length, d = [], a = 0; a < c; a += 2) d[a >>> 3] |= parseInt(b.substr(a, 2), 16) << 24 -
                a % 8 * 4;
            return new WordArray(d, c / 2)
        };
        this.HexStringify = function(b) {
            for (var e = b.words, b = b.sigBytes, c = [], a = 0; a < b; a++) {
                var d = e[a >>> 2] >>> 24 - a % 4 * 8 & 255;
                c.push((d >>> 4).toString(16));
                c.push((d & 15).toString(16))
            }
            return c.join("")
        };
        return this
    },
    WordArray = function(a, b) {
        this.words = a || [];
        this.sigBytes = b != void 0 ? b : a.length * 4;
        this.getArrs = function() {
            return this.words
        };
        this.toString = function() {
            for (var d = this.words, e = this.sigBytes, b = [], a = 0; a < e; a++) {
                var c = d[a >>> 2] >>> 24 - a % 4 * 8 & 255;
                b.push((c >>> 4).toString(16));
                b.push((c & 15).toString(16))
            }
            return b.join("")
        };
        return this
    },
    desObj = function() {
        function a(e, h, q, r, g, a) {
            var w = [16843776, 0, 65536, 16843780, 16842756, 66564, 4, 65536, 1024, 16843776, 16843780, 1024, 16778244,
                    16842756, 16777216, 4, 1028, 16778240, 16778240, 66560, 66560, 16842752, 16842752, 16778244, 65540,
                    16777220, 16777220, 65540, 0, 1028, 66564, 16777216, 65536, 16843780, 4, 16842752, 16843776,
                    16777216, 16777216, 1024, 16842756, 65536, 66560, 16777220, 1024, 4, 16778244, 66564, 16843780,
                    65540, 16842752, 16778244, 16777220, 1028, 66564, 16843776, 1028, 16778240, 16778240, 0, 65540,
                    66560, 0, 16842756
                ],
                x = [-2146402272, -2147450880, 32768, 1081376, 1048576, 32, -2146435040, -2147450848, -2147483616, -
                    2146402272, -2146402304, -2147483648, -2147450880, 1048576, 32, -2146435040, 1081344, 1048608, -
                    2147450848, 0, -2147483648, 32768, 1081376, -2146435072, 1048608, -2147483616, 0, 1081344, 32800, -
                    2146402304, -2146435072, 32800, 0, 1081376, -2146435040, 1048576, -2147450848, -2146435072, -
                    2146402304, 32768, -2146435072, -2147450880, 32, -2146402272, 1081376, 32, 32768, -2147483648,
                    32800, -2146402304, 1048576, -2147483616, 1048608, -2147450848, -2147483616, 1048608, 1081344, 0, -
                    2147450880, 32800, -2147483648, -2146435040, -2146402272, 1081344
                ],
                y = [520, 134349312, 0, 134348808, 134218240, 0, 131592, 134218240, 131080, 134217736, 134217736,
                    131072, 134349320, 131080, 134348800, 520, 134217728, 8, 134349312, 512, 131584, 134348800,
                    134348808, 131592, 134218248, 131584, 131072, 134218248, 8, 134349320, 512, 134217728, 134349312,
                    134217728, 131080, 520, 131072, 134349312, 134218240, 0, 512, 131080, 134349320, 134218240,
                    134217736, 512, 0, 134348808, 134218248, 131072, 134217728, 134349320, 8, 131592, 131584, 134217736,
                    134348800, 134218248, 520, 134348800, 131592, 8, 134348808, 131584
                ],
                z = [8396801, 8321, 8321, 128, 8396928, 8388737, 8388609, 8193, 0, 8396800, 8396800, 8396929, 129, 0,
                    8388736, 8388609, 1, 8192, 8388608, 8396801, 128, 8388608, 8193, 8320, 8388737, 1, 8320, 8388736,
                    8192, 8396928, 8396929, 129, 8388736, 8388609, 8396800, 8396929, 129, 0, 0, 8396800, 8320, 8388736,
                    8388737, 1, 8396801, 8321, 8321, 128, 8396929, 129, 1, 8192, 8388609, 8193, 8396928, 8388737, 8193,
                    8320, 8388608, 8396801, 128, 8388608, 8192, 8396928
                ],
                A = [256, 34078976, 34078720, 1107296512, 524288, 256, 1073741824, 34078720, 1074266368, 524288,
                    33554688, 1074266368, 1107296512, 1107820544, 524544, 1073741824, 33554432, 1074266112, 1074266112,
                    0, 1073742080, 1107820800, 1107820800, 33554688, 1107820544, 1073742080, 0, 1107296256, 34078976,
                    33554432, 1107296256, 524544, 524288, 1107296512, 256, 33554432, 1073741824, 34078720, 1107296512,
                    1074266368, 33554688, 1073741824, 1107820544, 34078976, 1074266368, 256, 33554432, 1107820544,
                    1107820800, 524544, 1107296256, 1107820800, 34078720, 0, 1074266112, 1107296256, 524544, 33554688,
                    1073742080, 524288, 0, 1074266112, 34078976, 1073742080
                ],
                B = [536870928, 541065216, 16384, 541081616, 541065216, 16, 541081616, 4194304, 536887296, 4210704,
                    4194304, 536870928, 4194320, 536887296, 536870912, 16400, 0, 4194320, 536887312, 16384, 4210688,
                    536887312, 16, 541065232, 541065232, 0, 4210704, 541081600, 16400, 4210688, 541081600, 536870912,
                    536887296, 16, 541065232, 4210688, 541081616, 4194304, 16400, 536870928, 4194304, 536887296,
                    536870912, 16400, 536870928, 541081616, 4210688, 541065216, 4210704, 541081600, 0, 541065232, 16,
                    16384, 541065216, 4210704, 16384, 4194320, 536887312, 0, 541081600, 536870912, 4194320, 536887312
                ],
                C = [2097152, 69206018, 67110914, 0, 2048, 67110914, 2099202, 69208064, 69208066, 2097152, 0, 67108866,
                    2, 67108864, 69206018, 2050, 67110912, 2099202, 2097154, 67110912, 67108866, 69206016, 69208064,
                    2097154, 69206016, 2048, 2050, 69208066, 2099200, 2, 67108864, 2099200, 67108864, 2099200, 2097152,
                    67110914, 67110914, 69206018, 69206018, 2, 2097154, 67108864, 67110912, 2097152, 69208064, 2050,
                    2099202, 69208064, 2050, 67108866, 69208066, 69206016, 2099200, 0, 2, 69208066, 0, 2099202,
                    69206016, 2048, 67108866, 67110912, 2048, 2097154
                ],
                D = [268439616, 4096, 262144, 268701760, 268435456, 268439616, 64, 268435456, 262208, 268697600,
                    268701760, 266240, 268701696, 266304, 4096, 64, 268697600, 268435520, 268439552, 4160, 266240,
                    262208, 268697664, 268701696, 4160, 0, 0, 268697664, 268435520, 268439552, 266304, 262144, 266304,
                    262144, 268701696, 4096, 64, 268697664, 4096, 266304, 268439552, 64, 268435520, 268697600,
                    268697664, 268435456, 262144, 268439616, 0, 268701760, 262208, 268435520, 268697600, 268439552,
                    268439616, 0, 268701760, 266240, 266240, 4160, 4160, 262208, 268435456, 268701696
                ];
            pc2bytes0 = [0, 4, 536870912, 536870916, 65536, 65540, 536936448, 536936452, 512, 516, 536871424, 536871428,
                66048, 66052, 536936960, 536936964
            ];
            pc2bytes1 = [0, 1, 1048576, 1048577, 67108864, 67108865, 68157440, 68157441, 256, 257, 1048832, 1048833,
                67109120, 67109121, 68157696, 68157697
            ];
            pc2bytes2 = [0, 8, 2048, 2056, 16777216, 16777224, 16779264, 16779272, 0, 8, 2048, 2056, 16777216, 16777224,
                16779264, 16779272
            ];
            pc2bytes3 = [0, 2097152, 134217728, 136314880, 8192, 2105344, 134225920, 136323072, 131072, 2228224,
                134348800, 136445952, 139264, 2236416, 134356992, 136454144
            ];
            pc2bytes4 = [0, 262144, 16, 262160, 0, 262144, 16, 262160, 4096, 266240, 4112, 266256, 4096, 266240, 4112,
                266256
            ];
            pc2bytes5 = [0, 1024, 32, 1056, 0, 1024, 32, 1056, 33554432, 33555456, 33554464, 33555488, 33554432,
                33555456, 33554464, 33555488
            ];
            pc2bytes6 = [0, 268435456, 524288, 268959744, 2, 268435458, 524290, 268959746, 0, 268435456, 524288,
                268959744, 2, 268435458, 524290, 268959746
            ];
            pc2bytes7 = [0, 65536, 2048, 67584, 536870912, 536936448, 536872960, 536938496, 131072, 196608, 133120,
                198656, 537001984, 537067520, 537004032, 537069568
            ];
            pc2bytes8 = [0, 262144, 0, 262144, 2, 262146, 2, 262146, 33554432, 33816576, 33554432, 33816576, 33554434,
                33816578, 33554434, 33816578
            ];
            pc2bytes9 = [0, 268435456, 8, 268435464, 0, 268435456, 8, 268435464, 1024, 268436480, 1032, 268436488, 1024,
                268436480, 1032, 268436488
            ];
            pc2bytes10 = [0, 32, 0, 32, 1048576, 1048608, 1048576, 1048608, 8192, 8224, 8192, 8224, 1056768, 1056800,
                1056768, 1056800
            ];
            pc2bytes11 = [0, 16777216, 512, 16777728, 2097152, 18874368, 2097664, 18874880, 67108864, 83886080,
                67109376, 83886592, 69206016, 85983232, 69206528, 85983744
            ];
            pc2bytes12 = [0, 4096, 134217728, 134221824, 524288, 528384, 134742016, 134746112, 16, 4112, 134217744,
                134221840, 524304, 528400, 134742032, 134746128
            ];
            pc2bytes13 = [0, 4, 256, 260, 0, 4, 256, 260, 1, 5, 257, 261, 1, 5, 257, 261];
            for (var k = e.length > 8 ? 3 : 1, n = Array(32 * k), m = [0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0],
                    i, l, f = 0, j = 0, d, c = 0; c < k; c++) {
                left = e.charCodeAt(f++) << 24 | e.charCodeAt(f++) << 16 | e.charCodeAt(f++) << 8 | e.charCodeAt(f++);
                right = e.charCodeAt(f++) << 24 | e.charCodeAt(f++) << 16 | e.charCodeAt(f++) << 8 | e.charCodeAt(f++);
                d = (left >>> 4 ^ right) & 252645135;
                right ^= d;
                left ^= d << 4;
                d = (right >>> -16 ^ left) & 65535;
                left ^= d;
                right ^= d << -16;
                d = (left >>> 2 ^ right) & 858993459;
                right ^= d;
                left ^= d << 2;
                d = (right >>> -16 ^ left) & 65535;
                left ^= d;
                right ^= d << -16;
                d = (left >>> 1 ^ right) & 1431655765;
                right ^= d;
                left ^= d << 1;
                d = (right >>> 8 ^ left) & 16711935;
                left ^= d;
                right ^= d << 8;
                d = (left >>> 1 ^ right) & 1431655765;
                right ^= d;
                left ^= d << 1;
                d = left << 8 | right >>> 20 & 240;
                left = right << 24 | right << 8 & 16711680 | right >>> 8 & 65280 | right >>> 24 & 240;
                right = d;
                for (var b = 0; b < m.length; b++) m[b] ? (left = left << 2 | left >>> 26, right = right << 2 | right >>>
                        26) : (left = left << 1 | left >>> 27, right = right << 1 | right >>> 27), left &= -15, right &=
                    -15, i = pc2bytes0[left >>> 28] | pc2bytes1[left >>> 24 & 15] | pc2bytes2[left >>> 20 & 15] |
                    pc2bytes3[left >>> 16 & 15] | pc2bytes4[left >>> 12 & 15] | pc2bytes5[left >>> 8 & 15] | pc2bytes6[
                        left >>> 4 & 15], l = pc2bytes7[right >>> 28] | pc2bytes8[right >>> 24 & 15] | pc2bytes9[right >>>
                        20 & 15] | pc2bytes10[right >>> 16 & 15] | pc2bytes11[right >>> 12 & 15] | pc2bytes12[right >>>
                        8 & 15] | pc2bytes13[right >>> 4 & 15], d = (l >>> 16 ^ i) & 65535, n[j++] = i ^ d, n[j++] = l ^
                    d << 16
            }
            var e = 0,
                o, s, p, t, u, v, m = h.length;
            i = 0;
            l = n.length == 32 ? 3 : 9;
            k = l == 3 ? q ? [0, 32, 2] : [30, -2, -2] : q ? [0, 32, 2, 62, 30, -2, 64, 96, 2] : [94, 62, -2, 32, 64, 2,
                30, -2, -2
            ];
            a == 2 ? (h += "        ") : a == 1 ? (a = 8 - m % 8, h += String.fromCharCode(a, a, a, a, a, a, a, a), a ==
                8 && (m += 8)) : a || (h += "\0\0\0\0\0\0\0\0");
            tempresult = result = "";
            r == 1 && (o = g.charCodeAt(e++) << 24 | g.charCodeAt(e++) << 16 | g.charCodeAt(e++) << 8 | g.charCodeAt(e++),
                p = g.charCodeAt(e++) << 24 | g.charCodeAt(e++) << 16 | g.charCodeAt(e++) << 8 | g.charCodeAt(e++),
                e = 0);
            for (; e < m;) {
                c = h.charCodeAt(e++) << 24 | h.charCodeAt(e++) << 16 | h.charCodeAt(e++) << 8 | h.charCodeAt(e++);
                b = h.charCodeAt(e++) << 24 | h.charCodeAt(e++) << 16 | h.charCodeAt(e++) << 8 | h.charCodeAt(e++);
                r == 1 && (q ? (c ^= o, b ^= p) : (s = o, t = p, o = c, p = b));
                a = (c >>> 4 ^ b) & 252645135;
                b ^= a;
                c ^= a << 4;
                a = (c >>> 16 ^ b) & 65535;
                b ^= a;
                c ^= a << 16;
                a = (b >>> 2 ^ c) & 858993459;
                c ^= a;
                b ^= a << 2;
                a = (b >>> 8 ^ c) & 16711935;
                c ^= a;
                b ^= a << 8;
                a = (c >>> 1 ^ b) & 1431655765;
                b ^= a;
                c ^= a << 1;
                c = c << 1 | c >>> 31;
                b = b << 1 | b >>> 31;
                for (f = 0; f < l; f += 3) {
                    u = k[f + 1];
                    v = k[f + 2];
                    for (g = k[f]; g != u; g += v) j = b ^ n[g], d = (b >>> 4 | b << 28) ^ n[g + 1], a = c, c = b, b =
                        a ^ (x[j >>> 24 & 63] | z[j >>> 16 & 63] | B[j >>> 8 & 63] | D[j & 63] | w[d >>> 24 & 63] | y[d >>>
                            16 & 63] | A[d >>> 8 & 63] | C[d & 63]);
                    a = c;
                    c = b;
                    b = a
                }
                c = c >>> 1 | c << 31;
                b = b >>> 1 | b << 31;
                a = (c >>> 1 ^ b) & 1431655765;
                b ^= a;
                c ^= a << 1;
                a = (b >>> 8 ^ c) & 16711935;
                c ^= a;
                b ^= a << 8;
                a = (b >>> 2 ^ c) & 858993459;
                c ^= a;
                b ^= a << 2;
                a = (c >>> 16 ^ b) & 65535;
                b ^= a;
                c ^= a << 16;
                a = (c >>> 4 ^ b) & 252645135;
                b ^= a;
                c ^= a << 4;
                r == 1 && (q ? (o = c, p = b) : (c ^= s, b ^= t));
                tempresult += String.fromCharCode(c >>> 24, c >>> 16 & 255, c >>> 8 & 255, c & 255, b >>> 24, b >>> 16 &
                    255, b >>> 8 & 255, b & 255);
                i += 8;
                i == 512 && (result += tempresult, tempresult = "", i = 0)
            }
            return result + tempresult
        }

        function b(b) {
            for (var c = "0x", d = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"], a =
                    0; a < b.length; a++) c += d[b.charCodeAt(a) >> 4] + d[b.charCodeAt(a) & 15];
            return c
        }

        function c(a) {
            for (var c = "", b = a.substr(0, 2) == "0x" ? 2 : 0; b < a.length; b += 2) {
                var d = a.substr(b, 2),
                    d = parseInt(d, 16);
                c += String.fromCharCode(d)
            }
            return c
        }

        function d(c) {
            for (var a = "", b = 0; b < c; b++) a +=
                "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/-_=".charAt(Math.floor(Math.random() *
                    67));
            return a
        }

        function e(a) {
            for (var b = 0; b < 8; b++) a += " ";
            return a
        }

        function f(c) {
            for (var a = "", d = "", b = 0, e = c.length; b < e; b++) a = c.charCodeAt(b).toString(16), d += "\\u" +
                Array(5 - a.length).join("0") + a;
            return d
        }

        function g(a) {
            return a.replace(/(\\u)(\w{4}|\w{2})/gi, function(b, c, a) {
                return String.fromCharCode(parseInt(a, 16))
            })
        }

        function h(b) {
            for (var a = b.length - 1; a >= 0; a--)
                if (b.charCodeAt(a) > 16 && b.charCodeAt(a) != 32) break;
            return b.substring(0, a + 1)
        }
        instance = this;
        desObj = function() {
            return instance
        };
        this.generatefordes = function() {
            return d(8)
        };
        this.generateforTripledes = function() {
            return d(24)
        };
        this.encryptbydes = function(c, d) {
            var g = f(d);
            return b(a(c, e(g), 1, 0))
        };
        this.decryptbydes = function(b, d) {
            return g(h(a(b, c(d), 0, 0)))
        };
        this.encryptbyTripledes = function(c, d) {
            var g = f(d);
            return b(a(c, e(g), 1, 0))
        };
        this.decryptbyTripledes = function(b, d) {
            return g(h(a(b, c(d), 0, 0)))
        }
    },
    md5Obj = function() {
        function b(g, b, c, d, e, h, i) {
            return a(f(a(a(g, b & c | ~b & d), a(e, i)), h), b)
        }

        function c(g, b, d, c, e, h, i) {
            return a(f(a(a(g, b & c | d & ~c), a(e, i)), h), b)
        }

        function d(g, b, c, d, e, h, i) {
            return a(f(a(a(g, b ^ c ^ d), a(e, i)), h), b)
        }

        function e(g, b, c, d, e, h, i) {
            return a(f(a(a(g, c ^ (b | ~d)), a(e, i)), h), b)
        }

        function a(c, a) {
            var b = (c & 65535) + (a & 65535);
            return (c >> 16) + (a >> 16) + (b >> 16) << 16 | b & 65535
        }

        function f(b, a) {
            return b << a | b >>> 32 - a
        }
        instance = this;
        md5Obj = function() {
            return instance
        };
        this.encryptbymd5 = function(j) {
            var f, j = j.replace(/\r\n/g, "\n");
            f = "";
            for (var h = 0; h < j.length; h++) {
                var g = j.charCodeAt(h);
                g < 128 ? (f += String.fromCharCode(g)) : (g > 127 && g < 2048 ? (f += String.fromCharCode(g >> 6 |
                    192)) : (f += String.fromCharCode(g >> 12 | 224), f += String.fromCharCode(g >> 6 & 63 |
                    128)), f += String.fromCharCode(g & 63 | 128))
            }
            h = f;
            j = [];
            for (g = 0; g < h.length * 8; g += 8) j[g >> 5] |= (h.charCodeAt(g / 8) & 255) << g % 32;
            f = f.length * 8;
            j[f >> 5] |= 128 << f % 32;
            j[(f + 64 >>> 9 << 4) + 14] = f;
            f = 1732584193;
            for (var h = -271733879, g = -1732584194, i = 271733878, k = 0; k < j.length; k += 16) {
                var l = f,
                    m = h,
                    n = g,
                    o = i;
                f = b(f, h, g, i, j[k + 0], 7, -680876936);
                i = b(i, f, h, g, j[k + 1], 12, -389564586);
                g = b(g, i, f, h, j[k + 2], 17, 606105819);
                h = b(h, g, i, f, j[k + 3], 22, -1044525330);
                f = b(f, h, g, i, j[k + 4], 7, -176418897);
                i = b(i, f, h, g, j[k + 5], 12, 1200080426);
                g = b(g, i, f, h, j[k + 6], 17, -1473231341);
                h = b(h, g, i, f, j[k + 7], 22, -45705983);
                f = b(f, h, g, i, j[k + 8], 7, 1770035416);
                i = b(i, f, h, g, j[k + 9], 12, -1958414417);
                g = b(g, i, f, h, j[k + 10], 17, -42063);
                h = b(h, g, i, f, j[k + 11], 22, -1990404162);
                f = b(f, h, g, i, j[k + 12], 7, 1804603682);
                i = b(i, f, h, g, j[k + 13], 12, -40341101);
                g = b(g, i, f, h, j[k + 14], 17, -1502002290);
                h = b(h, g, i, f, j[k + 15], 22, 1236535329);
                f = c(f, h, g, i, j[k + 1], 5, -165796510);
                i = c(i, f, h, g, j[k + 6], 9, -1069501632);
                g = c(g, i, f, h, j[k + 11], 14, 643717713);
                h = c(h, g, i, f, j[k + 0], 20, -373897302);
                f = c(f, h, g, i, j[k + 5], 5, -701558691);
                i = c(i, f, h, g, j[k + 10], 9, 38016083);
                g = c(g, i, f, h, j[k + 15], 14, -660478335);
                h = c(h, g, i, f, j[k + 4], 20, -405537848);
                f = c(f, h, g, i, j[k + 9], 5, 568446438);
                i = c(i, f, h, g, j[k + 14], 9, -1019803690);
                g = c(g, i, f, h, j[k + 3], 14, -187363961);
                h = c(h, g, i, f, j[k + 8], 20, 1163531501);
                f = c(f, h, g, i, j[k + 13], 5, -1444681467);
                i = c(i, f, h, g, j[k + 2], 9, -51403784);
                g = c(g, i, f, h, j[k + 7], 14, 1735328473);
                h = c(h, g, i, f, j[k + 12], 20, -1926607734);
                f = d(f, h, g, i, j[k + 5], 4, -378558);
                i = d(i, f, h, g, j[k + 8], 11, -2022574463);
                g = d(g, i, f, h, j[k + 11], 16, 1839030562);
                h = d(h, g, i, f, j[k + 14], 23, -35309556);
                f = d(f, h, g, i, j[k + 1], 4, -1530992060);
                i = d(i, f, h, g, j[k + 4], 11, 1272893353);
                g = d(g, i, f, h, j[k + 7], 16, -155497632);
                h = d(h, g, i, f, j[k + 10], 23, -1094730640);
                f = d(f, h, g, i, j[k + 13], 4, 681279174);
                i = d(i, f, h, g, j[k + 0], 11, -358537222);
                g = d(g, i, f, h, j[k + 3], 16, -722521979);
                h = d(h, g, i, f, j[k + 6], 23, 76029189);
                f = d(f, h, g, i, j[k + 9], 4, -640364487);
                i = d(i, f, h, g, j[k + 12], 11, -421815835);
                g = d(g, i, f, h, j[k + 15], 16, 530742520);
                h = d(h, g, i, f, j[k + 2], 23, -995338651);
                f = e(f, h, g, i, j[k + 0], 6, -198630844);
                i = e(i, f, h, g, j[k + 7], 10, 1126891415);
                g = e(g, i, f, h, j[k + 14], 15, -1416354905);
                h = e(h, g, i, f, j[k + 5], 21, -57434055);
                f = e(f, h, g, i, j[k + 12], 6, 1700485571);
                i = e(i, f, h, g, j[k + 3], 10, -1894986606);
                g = e(g, i, f, h, j[k + 10], 15, -1051523);
                h = e(h, g, i, f, j[k + 1], 21, -2054922799);
                f = e(f, h, g, i, j[k + 8], 6, 1873313359);
                i = e(i, f, h, g, j[k + 15], 10, -30611744);
                g = e(g, i, f, h, j[k + 6], 15, -1560198380);
                h = e(h, g, i, f, j[k + 13], 21, 1309151649);
                f = e(f, h, g, i, j[k + 4], 6, -145523070);
                i = e(i, f, h, g, j[k + 11], 10, -1120210379);
                g = e(g, i, f, h, j[k + 2], 15, 718787259);
                h = e(h, g, i, f, j[k + 9], 21, -343485551);
                f = a(f, l);
                h = a(h, m);
                g = a(g, n);
                i = a(i, o)
            }
            j = [f, h, g, i];
            f = "";
            for (h = 0; h < j.length * 4; h++) f += "0123456789abcdef".charAt(j[h >> 2] >> h % 4 * 8 + 4 & 15) +
                "0123456789abcdef".charAt(j[h >> 2] >> h % 4 * 8 & 15);
            return f
        }
    },
    sha1Obj = function() {
        function a(c, a) {
            var b = (c & 65535) + (a & 65535);
            return (c >> 16) + (a >> 16) + (b >> 16) << 16 | b & 65535
        }
        instance = this;
        sha1Obj = function() {
            return instance
        };
        this.encryptbysha1 = function(f) {
            for (var f = f.replace(/\r\n/g, "\n"), c = "", d = 0; d < f.length; d++) {
                var b = f.charCodeAt(d);
                b < 128 ? (c += String.fromCharCode(b)) : (b > 127 && b < 2048 ? (c += String.fromCharCode(b >> 6 |
                    192)) : (c += String.fromCharCode(b >> 12 | 224), c += String.fromCharCode(b >> 6 & 63 |
                    128)), c += String.fromCharCode(b & 63 | 128))
            }
            d = (c.length + 8 >> 6) + 1;
            f = Array(d * 16);
            for (b = 0; b < d * 16; b++) f[b] = 0;
            for (b = 0; b < c.length; b++) f[b >> 2] |= c.charCodeAt(b) << 24 - (b & 3) * 8;
            f[b >> 2] |= 128 << 24 - (b & 3) * 8;
            f[d * 16 - 1] = c.length * 8;
            for (var c = Array(80), d = 1732584193, b = -271733879, g = -1732584194, h = 271733878, i = -1009589776,
                    j = 0; j < f.length; j += 16) {
                for (var m = d, n = b, o = g, p = h, q = i, e = 0; e < 80; e++) {
                    c[e] = e < 16 ? f[j + e] : (c[e - 3] ^ c[e - 8] ^ c[e - 14] ^ c[e - 16]) << 1 | (c[e - 3] ^ c[e -
                        8] ^ c[e - 14] ^ c[e - 16]) >>> 31;
                    var k = d << 5 | d >>> 27,
                        l;
                    l = e < 20 ? b & g | ~b & h : e < 40 ? b ^ g ^ h : e < 60 ? b & g | b & h | g & h : b ^ g ^ h;
                    k = a(a(k, l), a(a(i, c[e]), e < 20 ? 1518500249 : e < 40 ? 1859775393 : e < 60 ? -1894007588 :
                        -899497514));
                    i = h;
                    h = g;
                    g = b << 30 | b >>> 2;
                    b = d;
                    d = k
                }
                d = a(d, m);
                b = a(b, n);
                g = a(g, o);
                h = a(h, p);
                i = a(i, q)
            }
            f = [d, b, g, h, i];
            c = "";
            for (d = 0; d < f.length * 4; d++) c += "0123456789abcdef".charAt(f[d >> 2] >> (3 - d % 4) * 8 + 4 & 15) +
                "0123456789abcdef".charAt(f[d >> 2] >> (3 - d % 4) * 8 & 15);
            return c
        }
    },
    SHA256Obj = function() {
        function a(a, b) {
            var c = (a & 65535) + (b & 65535);
            return (a >> 16) + (b >> 16) + (c >> 16) << 16 | c & 65535
        }

        function b(a, b) {
            return a >>> b | a << 32 - b
        }
        instance = this;
        SHA256Obj = function() {
            return instance
        };
        this.encryptbysha256 = function(c) {
            var h;
            h = c.replace(/\r\n/g, "\n");
            for (var c = "", f = 0; f < h.length; f++) {
                var d = h.charCodeAt(f);
                d < 128 ? (c += String.fromCharCode(d)) : (d > 127 && d < 2048 ? (c += String.fromCharCode(d >> 6 |
                    192)) : (c += String.fromCharCode(d >> 12 | 224), c += String.fromCharCode(d >> 6 & 63 |
                    128)), c += String.fromCharCode(d & 63 | 128))
            }
            f = c;
            h = [];
            for (d = 0; d < f.length * 8; d += 8) h[d >> 5] |= (f.charCodeAt(d / 8) & 255) << 24 - d % 32;
            var g = c.length * 8,
                f = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221,
                    3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580,
                    3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986,
                    2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895,
                    666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037,
                    2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344,
                    430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779,
                    1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298
                ],
                c = [1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225],
                d = Array(64),
                j, k, n, i, l, m, o, p, e, q, r;
            h[g >> 5] |= 128 << 24 - g % 32;
            h[(g + 64 >> 9 << 4) + 15] = g;
            for (p = 0; p < h.length; p += 16) {
                g = c[0];
                j = c[1];
                k = c[2];
                n = c[3];
                i = c[4];
                l = c[5];
                m = c[6];
                o = c[7];
                for (e = 0; e < 64; e++) d[e] = e < 16 ? h[e + p] : a(a(a(b(d[e - 2], 17) ^ b(d[e - 2], 19) ^ d[e -
                        2] >>> 10, d[e - 7]), b(d[e - 15], 7) ^ b(d[e - 15], 18) ^ d[e - 15] >>> 3), d[e - 16]), q =
                    a(a(a(a(o, b(i, 6) ^ b(i, 11) ^ b(i, 25)), i & l ^ ~i & m), f[e]), d[e]), r = a(b(g, 2) ^ b(g,
                        13) ^ b(g, 22), g & j ^ g & k ^ j & k), o = m, m = l, l = i, i = a(n, q), n = k, k = j, j =
                    g, g = a(q, r);
                c[0] = a(g, c[0]);
                c[1] = a(j, c[1]);
                c[2] = a(k, c[2]);
                c[3] = a(n, c[3]);
                c[4] = a(i, c[4]);
                c[5] = a(l, c[5]);
                c[6] = a(m, c[6]);
                c[7] = a(o, c[7])
            }
            h = "";
            for (f = 0; f < c.length * 4; f++) h += "0123456789abcdef".charAt(c[f >> 2] >> (3 - f % 4) * 8 + 4 & 15) +
                "0123456789abcdef".charAt(c[f >> 2] >> (3 - f % 4) * 8 & 15);
            return h
        }
    },
    dbits, canary = 0xdeadbeefcafe,
    j_lm = (canary & 16777215) == 15715070;

function BigInteger(a, b, c) {
    a != null && ("number" == typeof a ? this.fromNumber(a, b, c) : b == null && "string" != typeof a ? this.fromString(
        a, 256) : this.fromString(a, b))
}

function nbi() {
    return new BigInteger(null)
}

function am1(e, f, a, b, c, g) {
    for (; --g >= 0;) {
        var d = f * this[e++] + a[b] + c,
            c = Math.floor(d / 67108864);
        a[b++] = d & 67108863
    }
    return c
}

function am2(d, a, e, f, c, j) {
    var g = a & 32767;
    for (a >>= 15; --j >= 0;) {
        var b = this[d] & 32767,
            h = this[d++] >> 15,
            i = a * b + h * g,
            b = g * b + ((i & 32767) << 15) + e[f] + (c & 1073741823),
            c = (b >>> 30) + (i >>> 15) + a * h + (c >>> 30);
        e[f++] = b & 1073741823
    }
    return c
}

function am3(c, a, d, e, f, j) {
    var g = a & 16383;
    for (a >>= 14; --j >= 0;) {
        var b = this[c] & 16383,
            h = this[c++] >> 14,
            i = a * b + h * g,
            b = g * b + ((i & 16383) << 14) + d[e] + f,
            f = (b >> 28) + (i >> 14) + a * h;
        d[e++] = b & 268435455
    }
    return f
}
j_lm && navigator && navigator.appName == "Microsoft Internet Explorer" ? (BigInteger.prototype.am = am2, dbits = 30) :
    j_lm && navigator && navigator.appName != "Netscape" ? (BigInteger.prototype.am = am1, dbits = 26) : (BigInteger.prototype
        .am = am3, dbits = 28);
BigInteger.prototype.DB = dbits;
BigInteger.prototype.DM = (1 << dbits) - 1;
BigInteger.prototype.DV = 1 << dbits;
var BI_FP = 52;
BigInteger.prototype.FV = Math.pow(2, BI_FP);
BigInteger.prototype.F1 = BI_FP - dbits;
BigInteger.prototype.F2 = 2 * dbits - BI_FP;
var BI_RM = "0123456789abcdefghijklmnopqrstuvwxyz",
    BI_RC = [],
    rr, vv;
rr = "0".charCodeAt(0);
for (vv = 0; vv <= 9; ++vv) BI_RC[rr++] = vv;
rr = "a".charCodeAt(0);
for (vv = 10; vv < 36; ++vv) BI_RC[rr++] = vv;
rr = "A".charCodeAt(0);
for (vv = 10; vv < 36; ++vv) BI_RC[rr++] = vv;

function int2char(a) {
    return BI_RM.charAt(a)
}

function intAt(b, c) {
    var a = BI_RC[b.charCodeAt(c)];
    return a == null ? -1 : a
}

function bnpCopyTo(b) {
    for (var a = this.t - 1; a >= 0; --a) b[a] = this[a];
    b.t = this.t;
    b.s = this.s
}

function bnpFromInt(a) {
    this.t = 1;
    this.s = a < 0 ? -1 : 0;
    a > 0 ? (this[0] = a) : a < -1 ? (this[0] = a + this.DV) : (this.t = 0)
}

function nbv(b) {
    var a = nbi();
    a.fromInt(b);
    return a
}

function bnpFromString(d, c) {
    var b;
    if (c == 16) b = 4;
    else if (c == 8) b = 3;
    else if (c == 256) b = 8;
    else if (c == 2) b = 1;
    else if (c == 32) b = 5;
    else if (c == 4) b = 2;
    else {
        this.fromRadix(d, c);
        return
    }
    this.s = this.t = 0;
    for (var f = d.length, g = !1, a = 0; --f >= 0;) {
        var e = b == 8 ? d[f] & 255 : intAt(d, f);
        e < 0 ? d.charAt(f) == "-" && (g = !0) : (g = !1, a == 0 ? (this[this.t++] = e) : a + b > this.DB ? (this[this.t -
            1] |= (e & (1 << this.DB - a) - 1) << a, this[this.t++] = e >> this.DB - a) : (this[this.t - 1] |=
            e << a), a += b, a >= this.DB && (a -= this.DB))
    }
    if (b == 8 && (d[0] & 128) != 0) this.s = -1, a > 0 && (this[this.t - 1] |= (1 << this.DB - a) - 1 << a);
    this.clamp();
    g && BigInteger.ZERO.subTo(this, this)
}

function bnpClamp() {
    for (var a = this.s & this.DM; this.t > 0 && this[this.t - 1] == a;) --this.t
}

function bnToString(a) {
    if (this.s < 0) return "-" + this.negate().toString(a);
    if (a == 16) a = 4;
    else if (a == 8) a = 3;
    else if (a == 2) a = 1;
    else if (a == 32) a = 5;
    else if (a == 4) a = 2;
    else return this.toRadix(a);
    var g = (1 << a) - 1,
        d, e = !1,
        f = "",
        c = this.t,
        b = this.DB - c * this.DB % a;
    if (c-- > 0) {
        if (b < this.DB && (d = this[c] >> b) > 0) e = !0, f = int2char(d);
        for (; c >= 0;) b < a ? (d = (this[c] & (1 << b) - 1) << a - b, d |= this[--c] >> (b += this.DB - a)) : (d =
            this[c] >> (b -= a) & g, b <= 0 && (b += this.DB, --c)), d > 0 && (e = !0), e && (f += int2char(d))
    }
    return e ? f : "0"
}

function bnNegate() {
    var a = nbi();
    BigInteger.ZERO.subTo(this, a);
    return a
}

function bnAbs() {
    return this.s < 0 ? this.negate() : this
}

function bnCompareTo(c) {
    var a = this.s - c.s;
    if (a != 0) return a;
    var b = this.t,
        a = b - c.t;
    if (a != 0) return this.s < 0 ? -a : a;
    for (; --b >= 0;)
        if ((a = this[b] - c[b]) != 0) return a;
    return 0
}

function nbits(a) {
    var c = 1,
        b;
    if ((b = a >>> 16) != 0) a = b, c += 16;
    if ((b = a >> 8) != 0) a = b, c += 8;
    if ((b = a >> 4) != 0) a = b, c += 4;
    if ((b = a >> 2) != 0) a = b, c += 2;
    a >> 1 != 0 && (c += 1);
    return c
}

function bnBitLength() {
    return this.t <= 0 ? 0 : this.DB * (this.t - 1) + nbits(this[this.t - 1] ^ this.s & this.DM)
}

function bnpDLShiftTo(c, b) {
    for (var a = this.t - 1; a >= 0; --a) b[a + c] = this[a];
    for (a = c - 1; a >= 0; --a) b[a] = 0;
    b.t = this.t + c;
    b.s = this.s
}

function bnpDRShiftTo(b, c) {
    for (var a = b; a < this.t; ++a) c[a - b] = this[a];
    c.t = Math.max(this.t - b, 0);
    c.s = this.s
}

function bnpLShiftTo(f, b) {
    for (var d = f % this.DB, g = this.DB - d, h = (1 << g) - 1, c = Math.floor(f / this.DB), e = this.s << d & this.DM,
            a = this.t - 1; a >= 0; --a) b[a + c + 1] = this[a] >> g | e, e = (this[a] & h) << d;
    for (a = c - 1; a >= 0; --a) b[a] = 0;
    b[c] = e;
    b.t = this.t + c + 1;
    b.s = this.s;
    b.clamp()
}

function bnpRShiftTo(e, a) {
    a.s = this.s;
    var b = Math.floor(e / this.DB);
    if (b >= this.t) a.t = 0;
    else {
        var d = e % this.DB,
            g = this.DB - d,
            f = (1 << d) - 1;
        a[0] = this[b] >> d;
        for (var c = b + 1; c < this.t; ++c) a[c - b - 1] |= (this[c] & f) << g, a[c - b] = this[c] >> d;
        d > 0 && (a[this.t - b - 1] |= (this.s & f) << g);
        a.t = this.t - b;
        a.clamp()
    }
}

function bnpSubTo(d, c) {
    for (var b = 0, a = 0, e = Math.min(d.t, this.t); b < e;) a += this[b] - d[b], c[b++] = a & this.DM, a >>= this.DB;
    if (d.t < this.t) {
        for (a -= d.s; b < this.t;) a += this[b], c[b++] = a & this.DM, a >>= this.DB;
        a += this.s
    } else {
        for (a += this.s; b < d.t;) a -= d[b], c[b++] = a & this.DM, a >>= this.DB;
        a -= d.s
    }
    c.s = a < 0 ? -1 : 0;
    a < -1 ? (c[b++] = this.DV + a) : a > 0 && (c[b++] = a);
    c.t = b;
    c.clamp()
}

function bnpMultiplyTo(e, b) {
    var c = this.abs(),
        d = e.abs(),
        a = c.t;
    for (b.t = a + d.t; --a >= 0;) b[a] = 0;
    for (a = 0; a < d.t; ++a) b[a + c.t] = c.am(0, d[a], b, a, 0, c.t);
    b.s = 0;
    b.clamp();
    this.s != e.s && BigInteger.ZERO.subTo(b, b)
}

function bnpSquareTo(c) {
    for (var b = this.abs(), a = c.t = 2 * b.t; --a >= 0;) c[a] = 0;
    for (a = 0; a < b.t - 1; ++a) {
        var d = b.am(a, b[a], c, 2 * a, 0, 1);
        if ((c[a + b.t] += b.am(a + 1, 2 * b[a], c, 2 * a + 1, d, b.t - a - 1)) >= b.DV) c[a + b.t] -= b.DV, c[a + b.t +
            1] = 1
    }
    c.t > 0 && (c[c.t - 1] += b.am(a, b[a], c, 2 * a, 0, 1));
    c.s = 0;
    c.clamp()
}

function bnpDivRemTo(j, d, a) {
    var b = j.abs();
    if (!(b.t <= 0)) {
        var f = this.abs();
        if (f.t < b.t) d != null && d.fromInt(0), a != null && this.copyTo(a);
        else {
            a == null && (a = nbi());
            var c = nbi(),
                m = this.s,
                j = j.s,
                h = this.DB - nbits(b[b.t - 1]);
            h > 0 ? (b.lShiftTo(h, c), f.lShiftTo(h, a)) : (b.copyTo(c), f.copyTo(a));
            b = c.t;
            f = c[b - 1];
            if (f != 0) {
                var k = f * (1 << this.F1) + (b > 1 ? c[b - 2] >> this.F2 : 0),
                    n = this.FV / k,
                    k = (1 << this.F1) / k,
                    o = 1 << this.F2,
                    g = a.t,
                    i = g - b,
                    e = d == null ? nbi() : d;
                c.dlShiftTo(i, e);
                a.compareTo(e) >= 0 && (a[a.t++] = 1, a.subTo(e, a));
                BigInteger.ONE.dlShiftTo(b, e);
                for (e.subTo(c, c); c.t < b;) c[c.t++] = 0;
                for (; --i >= 0;) {
                    var l = a[--g] == f ? this.DM : Math.floor(a[g] * n + (a[g - 1] + o) * k);
                    if ((a[g] += c.am(0, l, a, i, 0, b)) < l) {
                        c.dlShiftTo(i, e);
                        for (a.subTo(e, a); a[g] < --l;) a.subTo(e, a)
                    }
                }
                d != null && (a.drShiftTo(b, d), m != j && BigInteger.ZERO.subTo(d, d));
                a.t = b;
                a.clamp();
                h > 0 && a.rShiftTo(h, a);
                m < 0 && BigInteger.ZERO.subTo(a, a)
            }
        }
    }
}

function bnMod(b) {
    var a = nbi();
    this.abs().divRemTo(b, null, a);
    this.s < 0 && a.compareTo(BigInteger.ZERO) > 0 && b.subTo(a, a);
    return a
}
var Classic = function(a) {
    this.m = a
};

function cConvert(a) {
    return a.s < 0 || a.compareTo(this.m) >= 0 ? a.mod(this.m) : a
}

function cRevert(a) {
    return a
}

function cReduce(a) {
    a.divRemTo(this.m, null, a)
}

function cMulTo(b, c, a) {
    b.multiplyTo(c, a);
    this.reduce(a)
}

function cSqrTo(b, a) {
    b.squareTo(a);
    this.reduce(a)
}
Classic.prototype.convert = cConvert;
Classic.prototype.revert = cRevert;
Classic.prototype.reduce = cReduce;
Classic.prototype.mulTo = cMulTo;
Classic.prototype.sqrTo = cSqrTo;

function bnpInvDigit() {
    if (this.t < 1) return 0;
    var b = this[0];
    if ((b & 1) == 0) return 0;
    var a = b & 3,
        a = a * (2 - (b & 15) * a) & 15,
        a = a * (2 - (b & 255) * a) & 255,
        a = a * (2 - ((b & 65535) * a & 65535)) & 65535,
        a = a * (2 - b * a % this.DV) % this.DV;
    return a > 0 ? this.DV - a : -a
}
var Montgomery = function(a) {
    this.m = a;
    this.mp = a.invDigit();
    this.mpl = this.mp & 32767;
    this.mph = this.mp >> 15;
    this.um = (1 << a.DB - 15) - 1;
    this.mt2 = 2 * a.t
};

function montConvert(b) {
    var a = nbi();
    b.abs().dlShiftTo(this.m.t, a);
    a.divRemTo(this.m, null, a);
    b.s < 0 && a.compareTo(BigInteger.ZERO) > 0 && this.m.subTo(a, a);
    return a
}

function montRevert(b) {
    var a = nbi();
    b.copyTo(a);
    this.reduce(a);
    return a
}

function montReduce(a) {
    for (; a.t <= this.mt2;) a[a.t++] = 0;
    for (var b = 0; b < this.m.t; ++b) {
        var c = a[b] & 32767,
            d = c * this.mpl + ((c * this.mph + (a[b] >> 15) * this.mpl & this.um) << 15) & a.DM,
            c = b + this.m.t;
        for (a[c] += this.m.am(0, d, a, b, 0, this.m.t); a[c] >= a.DV;) a[c] -= a.DV, a[++c]++
    }
    a.clamp();
    a.drShiftTo(this.m.t, a);
    a.compareTo(this.m) >= 0 && a.subTo(this.m, a)
}

function montSqrTo(b, a) {
    b.squareTo(a);
    this.reduce(a)
}

function montMulTo(b, c, a) {
    b.multiplyTo(c, a);
    this.reduce(a)
}
Montgomery.prototype.convert = montConvert;
Montgomery.prototype.revert = montRevert;
Montgomery.prototype.reduce = montReduce;
Montgomery.prototype.mulTo = montMulTo;
Montgomery.prototype.sqrTo = montSqrTo;

function bnpIsEven() {
    return (this.t > 0 ? this[0] & 1 : this.s) == 0
}

function bnpExp(b, c) {
    if (b > 4294967295 || b < 1) return BigInteger.ONE;
    var a = nbi(),
        d = nbi(),
        f = c.convert(this),
        e = nbits(b) - 1;
    for (f.copyTo(a); --e >= 0;)
        if (c.sqrTo(a, d), (b & 1 << e) > 0) c.mulTo(d, f, a);
        else var g = a,
            a = d,
            d = g;
    return c.revert(a)
}

function bnModPowInt(b, a) {
    var c;
    c = b < 256 || a.isEven() ? new Classic(a) : new Montgomery(a);
    return this.exp(b, c)
}
BigInteger.prototype.copyTo = bnpCopyTo;
BigInteger.prototype.fromInt = bnpFromInt;
BigInteger.prototype.fromString = bnpFromString;
BigInteger.prototype.clamp = bnpClamp;
BigInteger.prototype.dlShiftTo = bnpDLShiftTo;
BigInteger.prototype.drShiftTo = bnpDRShiftTo;
BigInteger.prototype.lShiftTo = bnpLShiftTo;
BigInteger.prototype.rShiftTo = bnpRShiftTo;
BigInteger.prototype.subTo = bnpSubTo;
BigInteger.prototype.multiplyTo = bnpMultiplyTo;
BigInteger.prototype.squareTo = bnpSquareTo;
BigInteger.prototype.divRemTo = bnpDivRemTo;
BigInteger.prototype.invDigit = bnpInvDigit;
BigInteger.prototype.isEven = bnpIsEven;
BigInteger.prototype.exp = bnpExp;
BigInteger.prototype.toString = bnToString;
BigInteger.prototype.negate = bnNegate;
BigInteger.prototype.abs = bnAbs;
BigInteger.prototype.compareTo = bnCompareTo;
BigInteger.prototype.bitLength = bnBitLength;
BigInteger.prototype.mod = bnMod;
BigInteger.prototype.modPowInt = bnModPowInt;
BigInteger.ZERO = nbv(0);
BigInteger.ONE = nbv(1);

function bnClone() {
    var a = nbi();
    this.copyTo(a);
    return a
}

function bnIntValue() {
    if (this.s < 0) {
        if (this.t == 1) return this[0] - this.DV;
        else if (this.t == 0) return -1
    } else if (this.t == 1) return this[0];
    else if (this.t == 0) return 0;
    return (this[1] & (1 << 32 - this.DB) - 1) << this.DB | this[0]
}

function bnByteValue() {
    return this.t == 0 ? this.s : this[0] << 24 >> 24
}

function bnShortValue() {
    return this.t == 0 ? this.s : this[0] << 16 >> 16
}

function bnpChunkSize(a) {
    return Math.floor(Math.LN2 * this.DB / Math.log(a))
}

function bnSigNum() {
    return this.s < 0 ? -1 : this.t <= 0 || this.t == 1 && this[0] <= 0 ? 0 : 1
}

function bnpToRadix(a) {
    a == null && (a = 10);
    if (this.signum() == 0 || a < 2 || a > 36) return "0";
    var d = this.chunkSize(a),
        d = Math.pow(a, d),
        f = nbv(d),
        b = nbi(),
        c = nbi(),
        e = "";
    for (this.divRemTo(f, b, c); b.signum() > 0;) e = (d + c.intValue()).toString(a).substr(1) + e, b.divRemTo(f, b, c);
    return c.intValue().toString(a) + e
}

function bnpFromRadix(e, a) {
    this.fromInt(0);
    a == null && (a = 10);
    for (var f = this.chunkSize(a), i = Math.pow(a, f), g = !1, d = 0, b = 0, c = 0; c < e.length; ++c) {
        var h = intAt(e, c);
        h < 0 ? e.charAt(c) == "-" && this.signum() == 0 && (g = !0) : (b = a * b + h, ++d >= f && (this.dMultiply(i),
            this.dAddOffset(b, 0), b = d = 0))
    }
    d > 0 && (this.dMultiply(Math.pow(a, d)), this.dAddOffset(b, 0));
    g && BigInteger.ZERO.subTo(this, this)
}

function bnpFromNumber(a, c, b) {
    if ("number" == typeof c)
        if (a < 2) this.fromInt(1);
        else {
            this.fromNumber(a, b);
            this.testBit(a - 1) || this.bitwiseTo(BigInteger.ONE.shiftLeft(a - 1), op_or, this);
            for (this.isEven() && this.dAddOffset(1, 0); !this.isProbablePrime(c);) this.dAddOffset(2, 0), this.bitLength() >
                a && this.subTo(BigInteger.ONE.shiftLeft(a - 1), this)
        }
    else {
        var b = [],
            d = a & 7;
        b.length = (a >> 3) + 1;
        c.nextBytes(b);
        d > 0 ? (b[0] &= (1 << d) - 1) : (b[0] = 0);
        this.fromString(b, 256)
    }
}

function bnToByteArray() {
    var c = this.t,
        e = [];
    e[0] = this.s;
    var a = this.DB - c * this.DB % 8,
        b, d = 0;
    if (c-- > 0) {
        if (a < this.DB && (b = this[c] >> a) != (this.s & this.DM) >> a) e[d++] = b | this.s << this.DB - a;
        for (; c >= 0;)
            if (a < 8 ? (b = (this[c] & (1 << a) - 1) << 8 - a, b |= this[--c] >> (a += this.DB - 8)) : (b = this[c] >>
                    (a -= 8) & 255, a <= 0 && (a += this.DB, --c)), (b & 128) != 0 && (b |= -256), d == 0 && (this.s &
                    128) != (b & 128) && ++d, d > 0 || b != this.s) e[d++] = b
    }
    return e
}

function bnEquals(a) {
    return this.compareTo(a) == 0
}

function bnMin(a) {
    return this.compareTo(a) < 0 ? this : a
}

function bnMax(a) {
    return this.compareTo(a) > 0 ? this : a
}

function bnpBitwiseTo(b, d, c) {
    for (var e, f = Math.min(b.t, this.t), a = 0; a < f; ++a) c[a] = d(this[a], b[a]);
    if (b.t < this.t) {
        e = b.s & this.DM;
        for (a = f; a < this.t; ++a) c[a] = d(this[a], e);
        c.t = this.t
    } else {
        e = this.s & this.DM;
        for (a = f; a < b.t; ++a) c[a] = d(e, b[a]);
        c.t = b.t
    }
    c.s = d(this.s, b.s);
    c.clamp()
}

function op_and(a, b) {
    return a & b
}

function bnAnd(b) {
    var a = nbi();
    this.bitwiseTo(b, op_and, a);
    return a
}

function op_or(a, b) {
    return a | b
}

function bnOr(b) {
    var a = nbi();
    this.bitwiseTo(b, op_or, a);
    return a
}

function op_xor(a, b) {
    return a ^ b
}

function bnXor(b) {
    var a = nbi();
    this.bitwiseTo(b, op_xor, a);
    return a
}

function op_andnot(a, b) {
    return a & ~b
}

function bnAndNot(b) {
    var a = nbi();
    this.bitwiseTo(b, op_andnot, a);
    return a
}

function bnNot() {
    for (var a = nbi(), b = 0; b < this.t; ++b) a[b] = this.DM & ~this[b];
    a.t = this.t;
    a.s = ~this.s;
    return a
}

function bnShiftLeft(a) {
    var b = nbi();
    a < 0 ? this.rShiftTo(-a, b) : this.lShiftTo(a, b);
    return b
}

function bnShiftRight(a) {
    var b = nbi();
    a < 0 ? this.lShiftTo(-a, b) : this.rShiftTo(a, b);
    return b
}

function lbit(a) {
    if (a == 0) return -1;
    var b = 0;
    (a & 65535) == 0 && (a >>= 16, b += 16);
    (a & 255) == 0 && (a >>= 8, b += 8);
    (a & 15) == 0 && (a >>= 4, b += 4);
    (a & 3) == 0 && (a >>= 2, b += 2);
    (a & 1) == 0 && ++b;
    return b
}

function bnGetLowestSetBit() {
    for (var a = 0; a < this.t; ++a)
        if (this[a] != 0) return a * this.DB + lbit(this[a]);
    return this.s < 0 ? this.t * this.DB : -1
}

function cbit(a) {
    for (var b = 0; a != 0;) a &= a - 1, ++b;
    return b
}

function bnBitCount() {
    for (var b = 0, c = this.s & this.DM, a = 0; a < this.t; ++a) b += cbit(this[a] ^ c);
    return b
}

function bnTestBit(a) {
    var b = Math.floor(a / this.DB);
    return b >= this.t ? this.s != 0 : (this[b] & 1 << a % this.DB) != 0
}

function bnpChangeBit(b, c) {
    var a = BigInteger.ONE.shiftLeft(b);
    this.bitwiseTo(a, c, a);
    return a
}

function bnSetBit(a) {
    return this.changeBit(a, op_or)
}

function bnClearBit(a) {
    return this.changeBit(a, op_andnot)
}

function bnFlipBit(a) {
    return this.changeBit(a, op_xor)
}

function bnpAddTo(d, c) {
    for (var b = 0, a = 0, e = Math.min(d.t, this.t); b < e;) a += this[b] + d[b], c[b++] = a & this.DM, a >>= this.DB;
    if (d.t < this.t) {
        for (a += d.s; b < this.t;) a += this[b], c[b++] = a & this.DM, a >>= this.DB;
        a += this.s
    } else {
        for (a += this.s; b < d.t;) a += d[b], c[b++] = a & this.DM, a >>= this.DB;
        a += d.s
    }
    c.s = a < 0 ? -1 : 0;
    a > 0 ? (c[b++] = a) : a < -1 && (c[b++] = this.DV + a);
    c.t = b;
    c.clamp()
}

function bnAdd(b) {
    var a = nbi();
    this.addTo(b, a);
    return a
}

function bnSubtract(b) {
    var a = nbi();
    this.subTo(b, a);
    return a
}

function bnMultiply(b) {
    var a = nbi();
    this.multiplyTo(b, a);
    return a
}

function bnSquare() {
    var a = nbi();
    this.squareTo(a);
    return a
}

function bnDivide(b) {
    var a = nbi();
    this.divRemTo(b, a, null);
    return a
}

function bnRemainder(b) {
    var a = nbi();
    this.divRemTo(b, null, a);
    return a
}

function bnDivideAndRemainder(c) {
    var a = nbi(),
        b = nbi();
    this.divRemTo(c, a, b);
    return [a, b]
}

function bnpDMultiply(a) {
    this[this.t] = this.am(0, a - 1, this, 0, 0, this.t);
    ++this.t;
    this.clamp()
}

function bnpDAddOffset(b, a) {
    if (b != 0) {
        for (; this.t <= a;) this[this.t++] = 0;
        for (this[a] += b; this[a] >= this.DV;) this[a] -= this.DV, ++a >= this.t && (this[this.t++] = 0), ++this[a]
    }
}

function NullExp() {}

function nNop(a) {
    return a
}

function nMulTo(a, b, c) {
    a.multiplyTo(b, c)
}

function nSqrTo(a, b) {
    a.squareTo(b)
}
NullExp.prototype.convert = nNop;
NullExp.prototype.revert = nNop;
NullExp.prototype.mulTo = nMulTo;
NullExp.prototype.sqrTo = nSqrTo;

function bnPow(a) {
    return this.exp(a, new NullExp)
}

function bnpMultiplyLowerTo(c, d, b) {
    var a = Math.min(this.t + c.t, d);
    b.s = 0;
    for (b.t = a; a > 0;) b[--a] = 0;
    for (var e = b.t - this.t; a < e; ++a) b[a + this.t] = this.am(0, c[a], b, a, 0, this.t);
    for (e = Math.min(c.t, d); a < e; ++a) this.am(0, c[a], b, a, 0, d - a);
    b.clamp()
}

function bnpMultiplyUpperTo(d, c, b) {
    --c;
    var a = b.t = this.t + d.t - c;
    for (b.s = 0; --a >= 0;) b[a] = 0;
    for (a = Math.max(c - this.t, 0); a < d.t; ++a) b[this.t + a - c] = this.am(c - a, d[a], b, 0, 0, this.t + a - c);
    b.clamp();
    b.drShiftTo(1, b)
}
var Barrett = function(a) {
    this.r2 = nbi();
    this.q3 = nbi();
    BigInteger.ONE.dlShiftTo(2 * a.t, this.r2);
    this.mu = this.r2.divide(a);
    this.m = a
};

function barrettConvert(a) {
    if (a.s < 0 || a.t > 2 * this.m.t) return a.mod(this.m);
    else if (a.compareTo(this.m) < 0) return a;
    else {
        var b = nbi();
        a.copyTo(b);
        this.reduce(b);
        return b
    }
}

function barrettRevert(a) {
    return a
}

function barrettReduce(a) {
    a.drShiftTo(this.m.t - 1, this.r2);
    if (a.t > this.m.t + 1) a.t = this.m.t + 1, a.clamp();
    this.mu.multiplyUpperTo(this.r2, this.m.t + 1, this.q3);
    for (this.m.multiplyLowerTo(this.q3, this.m.t + 1, this.r2); a.compareTo(this.r2) < 0;) a.dAddOffset(1, this.m.t +
        1);
    for (a.subTo(this.r2, a); a.compareTo(this.m) >= 0;) a.subTo(this.m, a)
}

function barrettSqrTo(b, a) {
    b.squareTo(a);
    this.reduce(a)
}

function barrettMulTo(b, c, a) {
    b.multiplyTo(c, a);
    this.reduce(a)
}
Barrett.prototype.convert = barrettConvert;
Barrett.prototype.revert = barrettRevert;
Barrett.prototype.reduce = barrettReduce;
Barrett.prototype.mulTo = barrettMulTo;
Barrett.prototype.sqrTo = barrettSqrTo;

function bnModPow(g, k) {
    var a = g.bitLength(),
        j, c = nbv(1),
        d;
    if (a <= 0) return c;
    else j = a < 18 ? 1 : a < 48 ? 3 : a < 144 ? 4 : a < 768 ? 5 : 6;
    d = a < 8 ? new Classic(k) : k.isEven() ? new Barrett(k) : new Montgomery(k);
    var h = [],
        b = 3,
        l = j - 1,
        m = (1 << j) - 1;
    h[1] = d.convert(this);
    if (j > 1) {
        a = nbi();
        for (d.sqrTo(h[1], a); b <= m;) h[b] = nbi(), d.mulTo(a, h[b - 2], h[b]), b += 2
    }
    for (var e = g.t - 1, i, n = !0, f = nbi(), a = nbits(g[e]) - 1; e >= 0;) {
        a >= l ? (i = g[e] >> a - l & m) : (i = (g[e] & (1 << a + 1) - 1) << l - a, e > 0 && (i |= g[e - 1] >> this.DB +
            a - l));
        for (b = j;
            (i & 1) == 0;) i >>= 1, --b;
        if ((a -= b) < 0) a += this.DB, --e;
        if (n) h[i].copyTo(c), n = !1;
        else {
            for (; b > 1;) d.sqrTo(c, f), d.sqrTo(f, c), b -= 2;
            b > 0 ? d.sqrTo(c, f) : (b = c, c = f, f = b);
            d.mulTo(f, h[i], c)
        }
        for (; e >= 0 && (g[e] & 1 << a) == 0;) d.sqrTo(c, f), b = c, c = f, f = b, --a < 0 && (a = this.DB - 1, --e)
    }
    return d.revert(c)
}

function bnGCD(a) {
    var b = this.s < 0 ? this.negate() : this.clone(),
        a = a.s < 0 ? a.negate() : a.clone();
    if (b.compareTo(a) < 0) var d = b,
        b = a,
        a = d;
    var d = b.getLowestSetBit(),
        c = a.getLowestSetBit();
    if (c < 0) return b;
    d < c && (c = d);
    c > 0 && (b.rShiftTo(c, b), a.rShiftTo(c, a));
    for (; b.signum() > 0;)(d = b.getLowestSetBit()) > 0 && b.rShiftTo(d, b), (d = a.getLowestSetBit()) > 0 && a.rShiftTo(
        d, a), b.compareTo(a) >= 0 ? (b.subTo(a, b), b.rShiftTo(1, b)) : (a.subTo(b, a), a.rShiftTo(1, a));
    c > 0 && a.lShiftTo(c, a);
    return a
}

function bnpModInt(a) {
    if (a <= 0) return 0;
    var d = this.DV % a,
        b = this.s < 0 ? a - 1 : 0;
    if (this.t > 0)
        if (d == 0) b = this[0] % a;
        else
            for (var c = this.t - 1; c >= 0; --c) b = (d * b + this[c]) % a;
    return b
}

function bnModInverse(b) {
    var h = b.isEven();
    if (this.isEven() && h || b.signum() == 0) return BigInteger.ZERO;
    for (var d = b.clone(), e = this.clone(), f = nbv(1), c = nbv(0), g = nbv(0), a = nbv(1); d.signum() != 0;) {
        for (; d.isEven();) {
            d.rShiftTo(1, d);
            if (h) {
                if (!f.isEven() || !c.isEven()) f.addTo(this, f), c.subTo(b, c);
                f.rShiftTo(1, f)
            } else c.isEven() || c.subTo(b, c);
            c.rShiftTo(1, c)
        }
        for (; e.isEven();) {
            e.rShiftTo(1, e);
            if (h) {
                if (!g.isEven() || !a.isEven()) g.addTo(this, g), a.subTo(b, a);
                g.rShiftTo(1, g)
            } else a.isEven() || a.subTo(b, a);
            a.rShiftTo(1, a)
        }
        d.compareTo(e) >= 0 ? (d.subTo(e, d), h && f.subTo(g, f), c.subTo(a, c)) : (e.subTo(d, e), h && g.subTo(f, g),
            a.subTo(c, a))
    }
    if (e.compareTo(BigInteger.ONE) != 0) return BigInteger.ZERO;
    if (a.compareTo(b) >= 0) return a.subtract(b);
    if (a.signum() < 0) a.addTo(b, a);
    else return a;
    return a.signum() < 0 ? a.add(b) : a
}
var lowprimes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101,
        103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223,
        227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349,
        353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479,
        487, 491, 499, 503, 509, 521, 523, 541, 547, 557, 563, 569, 571, 577, 587, 593, 599, 601, 607, 613, 617, 619,
        631, 641, 643, 647, 653, 659, 661, 673, 677, 683, 691, 701, 709, 719, 727, 733, 739, 743, 751, 757, 761, 769,
        773, 787, 797, 809, 811, 821, 823, 827, 829, 839, 853, 857, 859, 863, 877, 881, 883, 887, 907, 911, 919, 929,
        937, 941, 947, 953, 967, 971, 977, 983, 991, 997
    ],
    lplim = 67108864 / lowprimes[lowprimes.length - 1];

function bnIsProbablePrime(e) {
    var a, b = this.abs();
    if (b.t == 1 && b[0] <= lowprimes[lowprimes.length - 1]) {
        for (a = 0; a < lowprimes.length; ++a)
            if (b[0] == lowprimes[a]) return !0;
        return !1
    }
    if (b.isEven()) return !1;
    for (a = 1; a < lowprimes.length;) {
        for (var c = lowprimes[a], d = a + 1; d < lowprimes.length && c < lplim;) c *= lowprimes[d++];
        for (c = b.modInt(c); a < d;)
            if (c % lowprimes[a++] == 0) return !1
    }
    return b.millerRabin(e)
}

function bnpMillerRabin(c) {
    var b = this.subtract(BigInteger.ONE),
        d = b.getLowestSetBit();
    if (d <= 0) return !1;
    var g = b.shiftRight(d),
        c = c + 1 >> 1;
    if (c > lowprimes.length) c = lowprimes.length;
    for (var e = nbi(), f = 0; f < c; ++f) {
        e.fromInt(lowprimes[Math.floor(Math.random() * lowprimes.length)]);
        var a = e.modPow(g, this);
        if (a.compareTo(BigInteger.ONE) != 0 && a.compareTo(b) != 0) {
            for (var h = 1; h++ < d && a.compareTo(b) != 0;)
                if (a = a.modPowInt(2, this), a.compareTo(BigInteger.ONE) == 0) return !1;
            if (a.compareTo(b) != 0) return !1
        }
    }
    return !0
}
BigInteger.prototype.chunkSize = bnpChunkSize;
BigInteger.prototype.toRadix = bnpToRadix;
BigInteger.prototype.fromRadix = bnpFromRadix;
BigInteger.prototype.fromNumber = bnpFromNumber;
BigInteger.prototype.bitwiseTo = bnpBitwiseTo;
BigInteger.prototype.changeBit = bnpChangeBit;
BigInteger.prototype.addTo = bnpAddTo;
BigInteger.prototype.dMultiply = bnpDMultiply;
BigInteger.prototype.dAddOffset = bnpDAddOffset;
BigInteger.prototype.multiplyLowerTo = bnpMultiplyLowerTo;
BigInteger.prototype.multiplyUpperTo = bnpMultiplyUpperTo;
BigInteger.prototype.modInt = bnpModInt;
BigInteger.prototype.millerRabin = bnpMillerRabin;
BigInteger.prototype.clone = bnClone;
BigInteger.prototype.intValue = bnIntValue;
BigInteger.prototype.byteValue = bnByteValue;
BigInteger.prototype.shortValue = bnShortValue;
BigInteger.prototype.signum = bnSigNum;
BigInteger.prototype.toByteArray = bnToByteArray;
BigInteger.prototype.equals = bnEquals;
BigInteger.prototype.min = bnMin;
BigInteger.prototype.max = bnMax;
BigInteger.prototype.and = bnAnd;
BigInteger.prototype.or = bnOr;
BigInteger.prototype.xor = bnXor;
BigInteger.prototype.andNot = bnAndNot;
BigInteger.prototype.not = bnNot;
BigInteger.prototype.shiftLeft = bnShiftLeft;
BigInteger.prototype.shiftRight = bnShiftRight;
BigInteger.prototype.getLowestSetBit = bnGetLowestSetBit;
BigInteger.prototype.bitCount = bnBitCount;
BigInteger.prototype.testBit = bnTestBit;
BigInteger.prototype.setBit = bnSetBit;
BigInteger.prototype.clearBit = bnClearBit;
BigInteger.prototype.flipBit = bnFlipBit;
BigInteger.prototype.add = bnAdd;
BigInteger.prototype.subtract = bnSubtract;
BigInteger.prototype.multiply = bnMultiply;
BigInteger.prototype.divide = bnDivide;
BigInteger.prototype.remainder = bnRemainder;
BigInteger.prototype.divideAndRemainder = bnDivideAndRemainder;
BigInteger.prototype.modPow = bnModPow;
BigInteger.prototype.modInverse = bnModInverse;
BigInteger.prototype.pow = bnPow;
BigInteger.prototype.gcd = bnGCD;
BigInteger.prototype.isProbablePrime = bnIsProbablePrime;
BigInteger.prototype.square = bnSquare;
var SecureRandom = function() {
        function f(c) {
            b[a++] ^= c & 255;
            b[a++] ^= c >> 8 & 255;
            b[a++] ^= c >> 16 & 255;
            b[a++] ^= c >> 24 & 255;
            a >= e && (a -= e)
        }
        var d, b, a, e = 256;
        if (b == null) {
            b = [];
            a = 0;
            var c;
            if (navigator && navigator.appName == "Netscape" && navigator.appVersion < "5" && window.crypto) {
                var g = window.crypto.random(32);
                for (c = 0; c < g.length; ++c) b[a++] = g.charCodeAt(c) & 255
            }
            for (; a < e;) c = Math.floor(65536 * Math.random()), b[a++] = c >>> 8, b[a++] = c & 255;
            a = 0;
            f((new Date).getTime())
        }
        this.nextBytes = function(e) {
            for (var c = 0; c < e.length; ++c) {
                var h = e,
                    i = c,
                    g;
                if (d == null) {
                    f((new Date).getTime());
                    d = new prng_newstate;
                    d.init(b);
                    for (a = 0; a < b.length; ++a) b[a] = 0;
                    a = 0
                }
                g = d.next();
                h[i] = g
            }
        }
    },
    prng_newstate = function() {
        this.j = this.i = 0;
        this.S = [];
        this.init = function(d) {
            for (var b, c, a = 0; a < 256; ++a) this.S[a] = a;
            for (a = b = 0; a < 256; ++a) b = b + this.S[a] + d[a % d.length] & 255, c = this.S[a], this.S[a] =
                this.S[b], this.S[b] = c;
            this.j = this.i = 0
        };
        this.next = function() {
            var a;
            this.i = this.i + 1 & 255;
            this.j = this.j + this.S[this.i] & 255;
            a = this.S[this.i];
            this.S[this.i] = this.S[this.j];
            this.S[this.j] = a;
            return this.S[a + this.S[this.i] & 255]
        }
    },
    ECFieldElementFp = function(a, b) {
        this.x = b;
        this.q = a
    };

function feFpEquals(a) {
    return a == this ? !0 : this.q.equals(a.q) && this.x.equals(a.x)
}

function feFpToBigInteger() {
    return this.x
}

function feFpNegate() {
    return new ECFieldElementFp(this.q, this.x.negate().mod(this.q))
}

function feFpAdd(a) {
    return new ECFieldElementFp(this.q, this.x.add(a.toBigInteger()).mod(this.q))
}

function feFpSubtract(a) {
    return new ECFieldElementFp(this.q, this.x.subtract(a.toBigInteger()).mod(this.q))
}

function feFpMultiply(a) {
    return new ECFieldElementFp(this.q, this.x.multiply(a.toBigInteger()).mod(this.q))
}

function feFpSquare() {
    return new ECFieldElementFp(this.q, this.x.square().mod(this.q))
}

function feFpDivide(a) {
    return new ECFieldElementFp(this.q, this.x.multiply(a.toBigInteger().modInverse(this.q)).mod(this.q))
}
ECFieldElementFp.prototype.equals = feFpEquals;
ECFieldElementFp.prototype.toBigInteger = feFpToBigInteger;
ECFieldElementFp.prototype.negate = feFpNegate;
ECFieldElementFp.prototype.add = feFpAdd;
ECFieldElementFp.prototype.subtract = feFpSubtract;
ECFieldElementFp.prototype.multiply = feFpMultiply;
ECFieldElementFp.prototype.square = feFpSquare;
ECFieldElementFp.prototype.divide = feFpDivide;
var ECPointFp = function(b, c, d, a) {
    this.curve = b;
    this.x = c;
    this.y = d;
    this.z = a == null ? BigInteger.ONE : a;
    this.zinv = null
};

function pointFpGetX() {
    if (this.zinv == null) this.zinv = this.z.modInverse(this.curve.q);
    return this.curve.fromBigInteger(this.x.toBigInteger().multiply(this.zinv).mod(this.curve.q))
}

function pointFpGetY() {
    if (this.zinv == null) this.zinv = this.z.modInverse(this.curve.q);
    return this.curve.fromBigInteger(this.y.toBigInteger().multiply(this.zinv).mod(this.curve.q))
}

function pointFpEquals(a) {
    return a == this ? !0 : this.isInfinity() ? a.isInfinity() : a.isInfinity() ? this.isInfinity() : !a.y.toBigInteger()
        .multiply(this.z).subtract(this.y.toBigInteger().multiply(a.z)).mod(this.curve.q).equals(BigInteger.ZERO) ? !1 :
        a.x.toBigInteger().multiply(this.z).subtract(this.x.toBigInteger().multiply(a.z)).mod(this.curve.q).equals(
            BigInteger.ZERO)
}

function pointFpIsInfinity() {
    return this.x == null && this.y == null ? !0 : this.z.equals(BigInteger.ZERO) && !this.y.toBigInteger().equals(
        BigInteger.ZERO)
}

function pointFpNegate() {
    return new ECPointFp(this.curve, this.x, this.y.negate(), this.z)
}

function pointFpAdd(a) {
    if (this.isInfinity()) return a;
    if (a.isInfinity()) return this;
    var b = a.y.toBigInteger().multiply(this.z).subtract(this.y.toBigInteger().multiply(a.z)).mod(this.curve.q),
        c = a.x.toBigInteger().multiply(this.z).subtract(this.x.toBigInteger().multiply(a.z)).mod(this.curve.q);
    if (BigInteger.ZERO.equals(c)) return BigInteger.ZERO.equals(b) ? this.twice() : this.curve.getInfinity();
    var g = new BigInteger("3"),
        f = this.x.toBigInteger(),
        h = this.y.toBigInteger();
    a.x.toBigInteger();
    a.y.toBigInteger();
    var d = c.square(),
        e = d.multiply(c),
        f = f.multiply(d),
        d = b.square().multiply(this.z),
        c = d.subtract(f.shiftLeft(1)).multiply(a.z).subtract(e).multiply(c).mod(this.curve.q),
        b = f.multiply(g).multiply(b).subtract(h.multiply(e)).subtract(d.multiply(b)).multiply(a.z).add(b.multiply(e)).mod(
            this.curve.q),
        a = e.multiply(this.z).multiply(a.z).mod(this.curve.q);
    return new ECPointFp(this.curve, this.curve.fromBigInteger(c), this.curve.fromBigInteger(b), a)
}

function pointFpTwice() {
    if (this.isInfinity()) return this;
    if (this.y.toBigInteger().signum() == 0) return this.curve.getInfinity();
    var d = new BigInteger("3"),
        e = this.x.toBigInteger(),
        b = this.y.toBigInteger(),
        c = b.multiply(this.z),
        f = c.multiply(b).mod(this.curve.q),
        b = this.curve.a.toBigInteger(),
        a = e.square().multiply(d);
    BigInteger.ZERO.equals(b) || (a = a.add(this.z.square().multiply(b)));
    a = a.mod(this.curve.q);
    b = a.square().subtract(e.shiftLeft(3).multiply(f)).shiftLeft(1).multiply(c).mod(this.curve.q);
    d = a.multiply(d).multiply(e).subtract(f.shiftLeft(1)).shiftLeft(2).multiply(f).subtract(a.square().multiply(a)).mod(
        this.curve.q);
    c = c.square().multiply(c).shiftLeft(3).mod(this.curve.q);
    return new ECPointFp(this.curve, this.curve.fromBigInteger(b), this.curve.fromBigInteger(d), c)
}

function pointFpMultiply(c) {
    if (this.isInfinity()) return this;
    if (c.signum() == 0) return this.curve.getInfinity();
    for (var d = c.multiply(new BigInteger("3")), f = this.negate(), a = this, b = d.bitLength() - 2; b > 0; --b) {
        var a = a.twice(),
            e = d.testBit(b),
            g = c.testBit(b);
        e != g && (a = a.add(e ? this : f))
    }
    return a
}

function pointFpMultiplyTwo(d, e, c) {
    var b;
    b = d.bitLength() > c.bitLength() ? d.bitLength() - 1 : c.bitLength() - 1;
    for (var a = this.curve.getInfinity(), f = this.add(e); b >= 0;) a = a.twice(), d.testBit(b) ? (a = c.testBit(b) ?
        a.add(f) : a.add(this)) : c.testBit(b) && (a = a.add(e)), --b;
    return a
}
ECPointFp.prototype.getX = pointFpGetX;
ECPointFp.prototype.getY = pointFpGetY;
ECPointFp.prototype.equals = pointFpEquals;
ECPointFp.prototype.isInfinity = pointFpIsInfinity;
ECPointFp.prototype.negate = pointFpNegate;
ECPointFp.prototype.add = pointFpAdd;
ECPointFp.prototype.twice = pointFpTwice;
ECPointFp.prototype.multiply = pointFpMultiply;
ECPointFp.prototype.multiplyTwo = pointFpMultiplyTwo;
var ECCurveFp = function(a, b, c) {
    this.q = a;
    this.a = this.fromBigInteger(b);
    this.b = this.fromBigInteger(c);
    this.infinity = new ECPointFp(this, null, null)
};

function curveFpGetQ() {
    return this.q
}

function curveFpGetA() {
    return this.a
}

function curveFpGetB() {
    return this.b
}

function curveFpEquals(a) {
    return a == this ? !0 : this.q.equals(a.q) && this.a.equals(a.a) && this.b.equals(a.b)
}

function curveFpGetInfinity() {
    return this.infinity
}

function curveFpFromBigInteger(a) {
    return new ECFieldElementFp(this.q, a)
}

function curveFpDecodePointHex(a) {
    switch (parseInt(a.substr(0, 2), 16)) {
        case 0:
            return this.infinity;
        case 2:
        case 3:
            return null;
        case 4:
        case 6:
        case 7:
            var b = (a.length - 2) / 2,
                c = a.substr(2, b),
                a = a.substr(b + 2, b);
            return new ECPointFp(this, this.fromBigInteger(new BigInteger(c, 16)), this.fromBigInteger(new BigInteger(a,
                16)));
        default:
            return null
    }
}
ECCurveFp.prototype.getQ = curveFpGetQ;
ECCurveFp.prototype.getA = curveFpGetA;
ECCurveFp.prototype.getB = curveFpGetB;
ECCurveFp.prototype.equals = curveFpEquals;
ECCurveFp.prototype.getInfinity = curveFpGetInfinity;
ECCurveFp.prototype.fromBigInteger = curveFpFromBigInteger;
ECCurveFp.prototype.decodePointHex = curveFpDecodePointHex;
ECFieldElementFp.prototype.getByteLength = function() {
    return Math.floor((this.toBigInteger().bitLength() + 7) / 8)
};
ECPointFp.prototype.getEncoded = function(d) {
    var b = function(c, b) {
            var a = c.toByteArrayUnsigned();
            if (b < a.length) a = a.slice(a.length - b);
            else
                for (; b > a.length;) a.unshift(0);
            return a
        },
        a = this.getX().toBigInteger(),
        c = this.getY().toBigInteger(),
        a = b(a, 32);
    d ? c.isEven() ? a.unshift(2) : a.unshift(3) : (a.unshift(4), a = a.concat(b(c, 32)));
    return a
};
ECPointFp.decodeFrom = function(c, d) {
    var a = d.length - 1,
        b = d.slice(1, 1 + a / 2),
        a = d.slice(1 + a / 2, 1 + a);
    b.unshift(0);
    a.unshift(0);
    b = new BigInteger(b);
    a = new BigInteger(a);
    return new ECPointFp(c, c.fromBigInteger(b), c.fromBigInteger(a))
};
ECPointFp.decodeFromHex = function(d, b) {
    var c, a;
    b.substr(0, 2);
    a = b.length - 2;
    c = b.substr(2, a / 2);
    a = b.substr(2 + a / 2, a / 2);
    c = new BigInteger(c, 16);
    a = new BigInteger(a, 16);
    return new ECPointFp(d, d.fromBigInteger(c), d.fromBigInteger(a))
};
ECPointFp.prototype.add2D = function(a) {
    if (this.isInfinity()) return a;
    if (a.isInfinity()) return this;
    if (this.x.equals(a.x)) return this.y.equals(a.y) ? this.twice() : this.curve.getInfinity();
    var b = a.x.subtract(this.x),
        b = a.y.subtract(this.y).divide(b),
        a = b.square().subtract(this.x).subtract(a.x),
        b = b.multiply(this.x.subtract(a)).subtract(this.y);
    return new ECPointFp(this.curve, a, b)
};
ECPointFp.prototype.twice2D = function() {
    if (this.isInfinity()) return this;
    if (this.y.toBigInteger().signum() == 0) return this.curve.getInfinity();
    var a = this.curve.fromBigInteger(BigInteger.valueOf(2)),
        b = this.curve.fromBigInteger(BigInteger.valueOf(3)),
        b = this.x.square().multiply(b).add(this.curve.a).divide(this.y.multiply(a)),
        a = b.square().subtract(this.x.multiply(a)),
        b = b.multiply(this.x.subtract(a)).subtract(this.y);
    return new ECPointFp(this.curve, a, b)
};
ECPointFp.prototype.multiply2D = function(c) {
    if (this.isInfinity()) return this;
    if (c.signum() == 0) return this.curve.getInfinity();
    for (var d = c.multiply(new BigInteger("3")), f = this.negate(), a = this, b = d.bitLength() - 2; b > 0; --b) {
        var a = a.twice(),
            e = d.testBit(b),
            g = c.testBit(b);
        e != g && (a = a.add2D(e ? this : f))
    }
    return a
};
ECPointFp.prototype.isOnCurve = function() {
    var a = this.getX().toBigInteger(),
        b = this.getY().toBigInteger(),
        d = this.curve.getA().toBigInteger(),
        e = this.curve.getB().toBigInteger(),
        c = this.curve.getQ(),
        b = b.multiply(b).mod(c),
        a = a.multiply(a).multiply(a).add(d.multiply(a)).add(e).mod(c);
    return b.equals(a)
};
ECPointFp.prototype.toString = function() {
    return "(" + this.getX().toBigInteger().toString() + "," + this.getY().toBigInteger().toString() + ")"
};
ECPointFp.prototype.validate = function() {
    var a = this.curve.getQ();
    if (this.isInfinity()) throw Error("Point is at infinity.");
    var b = this.getX().toBigInteger(),
        c = this.getY().toBigInteger();
    if (b.compareTo(BigInteger.ONE) < 0 || b.compareTo(a.subtract(BigInteger.ONE)) > 0) throw Error(
        "x coordinate out of bounds");
    if (c.compareTo(BigInteger.ONE) < 0 || c.compareTo(a.subtract(BigInteger.ONE)) > 0) throw Error(
        "y coordinate out of bounds");
    if (!this.isOnCurve()) throw Error("Point is not on the curve.");
    if (this.multiply(a).isInfinity()) throw Error("Point is not a scalar multiple of G.");
    return !0
};

function parseBigInt(a, b) {
    return new BigInteger(a, b)
}

function linebrk(b, c) {
    for (var d = "", a = 0; a + c < b.length;) d += b.substring(a, a + c), a += c;
    return d + b.substring(a, b.length)
}

function byte2Hex(a) {
    return a < 16 ? "0" + a.toString(16) : a.toString(16)
}

function pkcs1pad2(e, b) {
    for (var c = [], d = e.length - 1; d >= 0 && b > 0;) {
        var a = e.charCodeAt(d--);
        a < 128 ? (c[--b] = a) : a > 127 && a < 2048 ? (c[--b] = a & 63 | 128, c[--b] = a >> 6 | 192) : (c[--b] = a &
            63 | 128, c[--b] = a >> 6 & 63 | 128, c[--b] = a >> 12 | 224)
    }
    c[--b] = 0;
    d = new SecureRandom;
    for (a = []; b > 2;) {
        for (a[0] = 0; a[0] == 0;) d.nextBytes(a);
        c[--b] = a[0]
    }
    c[--b] = 2;
    c[--b] = 0;
    return new BigInteger(c)
}

function RSAKey() {
    this.n = null;
    this.e = 0;
    this.coeff = this.dmq1 = this.dmp1 = this.q = this.p = this.d = null
}

function RSASetPublic(a, b) {
    a != null && b != null && a.length > 0 && b.length > 0 ? (this.n = parseBigInt(a, 16), this.e = parseInt(b, 16)) :
        alert("Invalid RSA public key")
}

function RSADoPublic(a) {
    return a.modPowInt(this.e, this.n)
}

function RSAEncrypt(a) {
    a = pkcs1pad2(a, this.n.bitLength() + 7 >> 3);
    if (a == null) return null;
    a = RSADoPublic(a);
    if (a == null) return null;
    a = a.toString(16);
    return (a.length & 1) == 0 ? a : "0" + a
}

function getencryptoRSA() {
    var a = new RSAKey;
    a.generate(512, "10001");
    return a
}

function encryptbyrsa(a, b, c) {
    RSASetPublic(a, b);
    a = RSAEncrypt(c);
    return linebrk(a, 64)
}
RSAKey.prototype.doPublic = RSADoPublic;
RSAKey.prototype.setPublic = RSASetPublic;
RSAKey.prototype.encrypt = RSAEncrypt;

function pkcs1unpad2(e, f) {
    for (var b = e.toByteArray(), a = 0; a < b.length && b[a] == 0;) ++a;
    if (b.length - a != f - 1 || b[a] != 2) return null;
    for (++a; b[a] != 0;)
        if (++a >= b.length) return null;
    for (var d = ""; ++a < b.length;) {
        var c = b[a] & 255;
        c < 128 ? (d += String.fromCharCode(c)) : c > 191 && c < 224 ? (d += String.fromCharCode((c & 31) << 6 | b[a +
            1] & 63), ++a) : (d += String.fromCharCode((c & 15) << 12 | (b[a + 1] & 63) << 6 | b[a + 2] & 63), a +=
            2)
    }
    return d
}

function RSASetPrivate(a, b, c) {
    a != null && b != null && a.length > 0 && b.length > 0 ? (this.n = parseBigInt(a, 16), this.e = parseInt(b, 16),
        this.d = parseBigInt(c, 16)) : alert("Invalid RSA private key")
}

function RSASetPrivateEx(a, b, d, c, f, e, g, h) {
    a != null && b != null && a.length > 0 && b.length > 0 ? (this.n = parseBigInt(a, 16), this.e = parseInt(b, 16),
        this.d = parseBigInt(d, 16), this.p = parseBigInt(c, 16), this.q = parseBigInt(f, 16), this.dmp1 =
        parseBigInt(e, 16), this.dmq1 = parseBigInt(g, 16), this.coeff = parseBigInt(h, 16)) : alert(
        "Invalid RSA private key")
}

function RSAGenerate(c, f) {
    var e = new SecureRandom,
        d = c >> 1;
    this.e = parseInt(f, 16);
    for (var a = new BigInteger(f, 16); true;) {
        for (; true;)
            if (this.p = new BigInteger(c - d, 1, e), this.p.subtract(BigInteger.ONE).gcd(a).compareTo(BigInteger.ONE) ==
                0 && this.p.isProbablePrime(10)) break;
        for (; true;)
            if (this.q = new BigInteger(d, 1, e), this.q.subtract(BigInteger.ONE).gcd(a).compareTo(BigInteger.ONE) == 0 &&
                this.q.isProbablePrime(10)) break;
        if (this.p.compareTo(this.q) <= 0) {
            var b = this.p;
            this.p = this.q;
            this.q = b
        }
        var b = this.p.subtract(BigInteger.ONE),
            g = this.q.subtract(BigInteger.ONE),
            h = b.multiply(g);
        if (h.gcd(a).compareTo(BigInteger.ONE) == 0) {
            this.n = this.p.multiply(this.q);
            this.d = a.modInverse(h);
            this.dmp1 = this.d.mod(b);
            this.dmq1 = this.d.mod(g);
            this.coeff = this.q.modInverse(this.p);
            break
        }
    }
}

function RSADoPrivate(a) {
    if (this.p == null || this.q == null) return a.modPow(this.d, this.n);
    for (var b = a.mod(this.p).modPow(this.dmp1, this.p), a = a.mod(this.q).modPow(this.dmq1, this.q); b.compareTo(a) <
        0;) b = b.add(this.p);
    return b.subtract(a).multiply(this.coeff).mod(this.p).multiply(this.q).add(a)
}

function RSADecrypt(a) {
    a = parseBigInt(a, 16);
    a = RSADoPrivate(a);
    return a == null ? null : pkcs1unpad2(a, this.n.bitLength() + 7 >> 3)
}

function decryptbyrsa(a, d, c, b) {
    RSASetPrivate(a, d, c);
    return RSADecrypt(b)
}
RSAKey.prototype.doPrivate = RSADoPrivate;
RSAKey.prototype.setPrivate = RSASetPrivate;
RSAKey.prototype.setPrivateEx = RSASetPrivateEx;
RSAKey.prototype.generate = RSAGenerate;
RSAKey.prototype.decrypt = RSADecrypt;
var SM3Digest = function() {
    this.BYTE_LENGTH = 64;
    this.xBuf = [];
    this.byteCount = this.xBufOff = 0;
    this.DIGEST_LENGTH = 32;
    this.v0 = [1937774191, 1226093241, 388252375, 3666478592, 2842636476, 372324522, 3817729613, 2969243214];
    this.v0 = [1937774191, 1226093241, 388252375, -628488704, -1452330820, 372324522, -477237683, -1325724082];
    this.v = Array(8);
    this.v_ = Array(8);
    this.X0 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    this.X = Array(68);
    this.xOff = 0;
    this.T_00_15 = 2043430169;
    this.T_16_63 = 2055708042;
    arguments.length > 0 ? this.InitDigest(arguments[0]) : this.Init()
};
SM3Digest.prototype = {
    Init: function() {
        this.xBuf = Array(4);
        this.Reset()
    },
    InitDigest: function(a) {
        this.xBuf = Array(a.xBuf.length);
        Array.Copy(a.xBuf, 0, this.xBuf, 0, a.xBuf.length);
        this.xBufOff = a.xBufOff;
        this.byteCount = a.byteCount;
        Array.Copy(a.X, 0, this.X, 0, a.X.length);
        this.xOff = a.xOff;
        Array.Copy(a.v, 0, this.v, 0, a.v.length)
    },
    GetDigestSize: function() {
        return this.DIGEST_LENGTH
    },
    Reset: function() {
        this.xBufOff = this.byteCount = 0;
        Array.Clear(this.xBuf, 0, this.xBuf.length);
        Array.Copy(this.v0, 0, this.v, 0, this.v0.length);
        this.xOff = 0;
        Array.Copy(this.X0, 0, this.X, 0, this.X0.length)
    },
    GetByteLength: function() {
        return this.BYTE_LENGTH
    },
    ProcessBlock: function() {
        for (var e = this.X, f = Array(64), b = 16; b < 68; b++) e[b] = this.P1(e[b - 16] ^ e[b - 9] ^ this.ROTATE(
            e[b - 3], 15)) ^ this.ROTATE(e[b - 13], 7) ^ e[b - 6];
        for (b = 0; b < 64; b++) f[b] = e[b] ^ e[b + 4];
        var g = this.v,
            a = this.v_;
        Array.Copy(g, 0, a, 0, this.v0.length);
        var c, d;
        for (b = 0; b < 16; b++) d = this.ROTATE(a[0], 12), c = Int32.parse(Int32.parse(d + a[4]) + this.ROTATE(
                this.T_00_15, b)), c = this.ROTATE(c, 7), d ^= c, d = Int32.parse(Int32.parse(this.FF_00_15(a[0],
                a[1], a[2]) + a[3]) + d) + f[b], c = Int32.parse(Int32.parse(this.GG_00_15(a[4], a[5], a[6]) +
                a[7]) + c) + e[b], a[3] = a[2], a[2] = this.ROTATE(a[1], 9), a[1] = a[0], a[0] = d, a[7] = a[6],
            a[6] = this.ROTATE(a[5], 19), a[5] = a[4], a[4] = this.P0(c);
        for (b = 16; b < 64; b++) d = this.ROTATE(a[0], 12), c = Int32.parse(Int32.parse(d + a[4]) + this.ROTATE(
                this.T_16_63, b)), c = this.ROTATE(c, 7), d ^= c, d = Int32.parse(Int32.parse(this.FF_16_63(a[0],
                a[1], a[2]) + a[3]) + d) + f[b], c = Int32.parse(Int32.parse(this.GG_16_63(a[4], a[5], a[6]) +
                a[7]) + c) + e[b], a[3] = a[2], a[2] = this.ROTATE(a[1], 9), a[1] = a[0], a[0] = d, a[7] = a[6],
            a[6] = this.ROTATE(a[5], 19), a[5] = a[4], a[4] = this.P0(c);
        for (b = 0; b < 8; b++) g[b] ^= Int32.parse(a[b]);
        this.xOff = 0;
        Array.Copy(this.X0, 0, this.X, 0, this.X0.length)
    },
    ProcessWord: function(a, c) {
        var b = a[c] << 24;
        b |= (a[++c] & 255) << 16;
        b |= (a[++c] & 255) << 8;
        b |= a[++c] & 255;
        this.X[this.xOff] = b;
        ++this.xOff == 16 && this.ProcessBlock()
    },
    ProcessLength: function(a) {
        this.xOff > 14 && this.ProcessBlock();
        this.X[14] = this.URShiftLong(a, 32);
        this.X[15] = a & 4294967295
    },
    IntToBigEndian: function(a, c, b) {
        c[b] = Int32.parseByte(this.URShift(a, 24));
        c[++b] = Int32.parseByte(this.URShift(a, 16));
        c[++b] = Int32.parseByte(this.URShift(a, 8));
        c[++b] = Int32.parseByte(a)
    },
    DoFinal: function(b, c) {
        this.Finish();
        for (var a = 0; a < 8; a++) this.IntToBigEndian(this.v[a], b, c + a * 4);
        this.Reset();
        return this.DIGEST_LENGTH
    },
    Update: function(a) {
        this.xBuf[this.xBufOff++] = a;
        if (this.xBufOff == this.xBuf.length) this.ProcessWord(this.xBuf, 0), this.xBufOff = 0;
        this.byteCount++
    },
    BlockUpdate: function(c, b, a) {
        for (; this.xBufOff != 0 && a > 0;) this.Update(c[b]), b++, a--;
        for (; a > this.xBuf.length;) this.ProcessWord(c, b), b += this.xBuf.length, a -= this.xBuf.length,
            this.byteCount += this.xBuf.length;
        for (; a > 0;) this.Update(c[b]), b++, a--
    },
    Finish: function() {
        var a = this.byteCount << 3;
        for (this.Update(128); this.xBufOff != 0;) this.Update(0);
        this.ProcessLength(a);
        this.ProcessBlock()
    },
    ROTATE: function(a, b) {
        return a << b | this.URShift(a, 32 - b)
    },
    P0: function(a) {
        return a ^ this.ROTATE(a, 9) ^ this.ROTATE(a, 17)
    },
    P1: function(a) {
        return a ^ this.ROTATE(a, 15) ^ this.ROTATE(a, 23)
    },
    FF_00_15: function(a, c, b) {
        return a ^ c ^ b
    },
    FF_16_63: function(a, c, b) {
        return a & c | a & b | c & b
    },
    GG_00_15: function(a, c, b) {
        return a ^ c ^ b
    },
    GG_16_63: function(a, c, b) {
        return a & c | ~a & b
    },
    URShift: function(a, b) {
        if (a > Int32.maxValue || a < Int32.minValue) a = Int32.parse(a);
        return a >= 0 ? a >> b : (a >> b) + (2 << ~b)
    },
    URShiftLong: function(e, c) {
        var a;
        a = new BigInteger;
        a.fromInt(e);
        if (a.signum() >= 0) a = a.shiftRight(c).intValue();
        else {
            var b = new BigInteger;
            b.fromInt(2);
            var d = ~c;
            a = "";
            if (d < 0) {
                b = 64 + d;
                for (d = 0; d < b; d++) a += "0";
                b = new BigInteger;
                b.fromInt(e >> c);
                a = new BigInteger("10" + a, 2);
                a.toRadix(10);
                a = a.add(b).toRadix(10)
            } else a = b.shiftLeft(~c).intValue(), a = (e >> c) + a
        }
        return a
    },
    GetZ: function(b, d) {
        var a = CryptoJS.enc.Utf8.parse("1234567812345678"),
            c = a.words.length * 32;
        this.Update(c >> 8 & 255);
        this.Update(c & 255);
        a = this.GetWords(a.toString());
        this.BlockUpdate(a, 0, a.length);
        var a = this.GetWords(b.curve.a.toBigInteger().toRadix(16)),
            c = this.GetWords(b.curve.b.toBigInteger().toRadix(16)),
            e = this.GetWords(b.getX().toBigInteger().toRadix(16)),
            f = this.GetWords(b.getY().toBigInteger().toRadix(16)),
            g = this.GetWords(d.substr(0, 64)),
            h = this.GetWords(d.substr(64, 64));
        this.BlockUpdate(a, 0, a.length);
        this.BlockUpdate(c, 0, c.length);
        this.BlockUpdate(e, 0, e.length);
        this.BlockUpdate(f, 0, f.length);
        this.BlockUpdate(g, 0, g.length);
        this.BlockUpdate(h, 0, h.length);
        a = Array(this.GetDigestSize());
        this.DoFinal(a, 0);
        return a
    },
    GetWords: function(c) {
        for (var a = [], d = c.length, b = 0; b < d; b += 2) a[a.length] = parseInt(c.substr(b, 2), 16);
        return a
    },
    GetHex: function(b) {
        for (var d = [], c = 0, a = 0; a < b.length * 2; a += 2) d[a >>> 3] |= parseInt(b[c]) << 24 - a % 8 * 4,
            c++;
        return new WordArray(d, b.length)
    },
    encrypt: function(a) {
        var b = new charSet,
            a = this.GetWords(b.HexStringify(b.parseUTF8(a))),
            c = Array(32);
        this.BlockUpdate(a, 0, a.length);
        this.DoFinal(c, 0);
        return b.HexStringify(this.GetHex(c))
    }
};
Array.Clear = function(a) {
    for (elm in a) a[elm] = null
};
Array.Copy = function(b, a, d, c, e) {
    b = b.slice(a, a + e);
    for (a = 0; a < b.length; a++) d[c] = b[a], c++
};
Int32 = {
    minValue: -parseInt("10000000000000000000000000000000", 2),
    maxValue: parseInt("1111111111111111111111111111111", 2),
    parse: function(a) {
        if (a < this.minValue) {
            for (var a = new Number(-a), a = a.toString(2), a = a.substr(a.length - 31, 31), c = "", b = 0; b <
                a.length; b++) {
                var d = a.substr(b, 1);
                c += d == "0" ? "1" : "0"
            }
            a = parseInt(c, 2);
            return a + 1
        } else if (a > this.maxValue) {
            a = Number(a).toString(2);
            a = a.substr(a.length - 31, 31);
            c = "";
            for (b = 0; b < a.length; b++) d = a.substr(b, 1), c += d == "0" ? "1" : "0";
            a = parseInt(c, 2);
            return -(a + 1)
        } else return a
    },
    parseByte: function(a) {
        if (a < 0) {
            for (var a = new Number(-a), a = a.toString(2), a = a.substr(a.length - 8, 8), c = "", b = 0; b < a
                .length; b++) {
                var d = a.substr(b, 1);
                c += d == "0" ? "1" : "0"
            }
            return parseInt(c, 2) + 1
        } else return a > 255 ? (a = Number(a).toString(2), parseInt(a.substr(a.length - 8, 8), 2)) : a
    }
};
if (typeof KJUR == "undefined" || !KJUR) KJUR = {};
if (typeof KJUR.crypto == "undefined" || !KJUR.crypto) KJUR.crypto = {};
KJUR.crypto.SM3withSM2 = function(a) {
    var b = new SecureRandom;
    this.type = "SM2";
    this.getBigRandom = function(a) {
        return (new BigInteger(a.bitLength(), b)).mod(a.subtract(BigInteger.ONE)).add(BigInteger.ONE)
    };
    this.setNamedCurve = function(a) {
        this.ecparams = KJUR.crypto.ECParameterDB.getByName(a);
        this.pubKeyHex = this.prvKeyHex = null;
        this.curveName = a
    };
    this.setPrivateKeyHex = function(a) {
        this.isPrivate = !0;
        this.prvKeyHex = a
    };
    this.setPublicKeyHex = function(a) {
        this.isPublic = !0;
        this.pubKeyHex = a
    };
    this.generateKeyPairHex = function() {
        var a = this.getBigRandom(this.ecparams.n),
            b = this.ecparams.G.multiply(a),
            c = b.getX().toBigInteger(),
            b = b.getY().toBigInteger(),
            d = this.ecparams.keylen / 4,
            a = ("0000000000" + a.toString(16)).slice(-d),
            c = ("0000000000" + c.toString(16)).slice(-d),
            b = ("0000000000" + b.toString(16)).slice(-d),
            c = "04" + c + b;
        this.setPrivateKeyHex(a);
        this.setPublicKeyHex(c);
        return {
            ecprvhex: a,
            ecpubhex: c
        }
    };
    this.signWithMessageHash = function(a) {
        return this.signHex(a, this.prvKeyHex)
    };
    this.signHex = function(g, h) {
        var e = new BigInteger(h, 16),
            b = this.ecparams.n,
            i = new BigInteger(g, 16),
            d = null,
            a = null,
            c = a = null;
        do {
            do a = this.generateKeyPairHex(), d = new BigInteger(a.ecprvhex, 16), a = ECPointFp.decodeFromHex(
                this.ecparams.curve, a.ecpubhex), a = i.add(a.getX().toBigInteger()), a = a.mod(b); while (a.equals(
                    BigInteger.ZERO) || a.add(d).equals(b));
            var f = e.add(BigInteger.ONE),
                f = f.modInverse(b),
                c = a.multiply(e),
                c = d.subtract(c).mod(b),
                c = f.multiply(c).mod(b)
        } while (c.equals(BigInteger.ZERO));
        return KJUR.crypto.ECDSA.biRSSigToASN1Sig(a, c)
    };
    this.sign = function(d, e) {
        var a = this.ecparams.n,
            f = BigInteger.fromByteArrayUnsigned(d);
        do var c = this.getBigRandom(a),
            b = this.ecparams.G.multiply(c).getX().toBigInteger().mod(a); while (b.compareTo(BigInteger.ZERO) <=
            0);
        a = c.modInverse(a).multiply(f.add(e.multiply(b))).mod(a);
        return this.serializeSig(b, a)
    };
    this.verifyWithMessageHash = function(a, b) {
        return this.verifyHex(a, b, this.pubKeyHex)
    };
    this.verifyHex = function(d, b, c) {
        var a;
        a = KJUR.crypto.ECDSA.parseSigHex(b);
        b = a.r;
        a = a.s;
        c = ECPointFp.decodeFromHex(this.ecparams.curve, c);
        return this.verifyRaw(new BigInteger(d, 16), b, a, c)
    };
    this.verify = function(d, a, b) {
        var c;
        if (Bitcoin.Util.isArray(a)) a = this.parseSig(a), c = a.r, a = a.s;
        else if ("object" === typeof a && a.r && a.s) c = a.r, a = a.s;
        else throw "Invalid value for signature";
        if (!(b instanceof ECPointFp))
            if (Bitcoin.Util.isArray(b)) b = ECPointFp.decodeFrom(this.ecparams.curve, b);
            else throw "Invalid format for pubkey value, must be byte array or ECPointFp";
        return this.verifyRaw(BigInteger.fromByteArrayUnsigned(d), c, a, b)
    };
    this.verifyRaw = function(b, c, a, f) {
        var d = this.ecparams.n,
            g = this.ecparams.G,
            e = c.add(a).mod(d);
        if (e.equals(BigInteger.ZERO)) return !1;
        a = g.multiply(a);
        a = a.add(f.multiply(e));
        b = b.add(a.getX().toBigInteger()).mod(d);
        return c.equals(b)
    };
    this.serializeSig = function(d, e) {
        var b = d.toByteArraySigned(),
            c = e.toByteArraySigned(),
            a = [];
        a.push(2);
        a.push(b.length);
        a = a.concat(b);
        a.push(2);
        a.push(c.length);
        a = a.concat(c);
        a.unshift(a.length);
        a.unshift(48);
        return a
    };
    this.parseSig = function(a) {
        var b;
        if (a[0] != 48) throw Error("Signature not a valid DERSequence");
        b = 2;
        if (a[b] != 2) throw Error("First element in signature must be a DERInteger");
        var c = a.slice(b + 2, b + 2 + a[b + 1]);
        b += 2 + a[b + 1];
        if (a[b] != 2) throw Error("Second element in signature must be a DERInteger");
        a = a.slice(b + 2, b + 2 + a[b + 1]);
        c = BigInteger.fromByteArrayUnsigned(c);
        a = BigInteger.fromByteArrayUnsigned(a);
        return {
            r: c,
            s: a
        }
    };
    this.parseSigCompact = function(a) {
        if (a.length !== 65) throw "Signature has the wrong length";
        var b = a[0] - 27;
        if (b < 0 || b > 7) throw "Invalid signature type";
        var c = this.ecparams.n,
            d = BigInteger.fromByteArrayUnsigned(a.slice(1, 33)).mod(c),
            a = BigInteger.fromByteArrayUnsigned(a.slice(33, 65)).mod(c);
        return {
            r: d,
            s: a,
            i: b
        }
    };
    if (a !== void 0 && a.curve !== void 0) this.curveName = a.curve;
    if (this.curveName === void 0) this.curveName = "sm2";
    this.setNamedCurve(this.curveName);
    a !== void 0 && (a.prv !== void 0 && this.setPrivateKeyHex(a.prv), a.pub !== void 0 && this.setPublicKeyHex(a.pub))
};
if (typeof KJUR == "undefined" || !KJUR) KJUR = {};
if (typeof KJUR.crypto == "undefined" || !KJUR.crypto) KJUR.crypto = {};
KJUR.crypto.ECParameterDB = new function() {
    var a = {},
        b = {};
    this.getByName = function(d) {
        var c = d;
        typeof b[c] != "undefined" && (c = b[d]);
        if (typeof a[c] != "undefined") return a[c];
        throw "unregistered EC curve name: " + c;
    };
    this.regist = function(c, e, d, f, g, h, i, j, l, k, m, n) {
        a[c] = {};
        d = new BigInteger(d, 16);
        f = new BigInteger(f, 16);
        g = new BigInteger(g, 16);
        h = new BigInteger(h, 16);
        i = new BigInteger(i, 16);
        d = new ECCurveFp(d, f, g);
        j = d.decodePointHex("04" + j + l);
        a[c].name = c;
        a[c].keylen = e;
        a[c].curve = d;
        a[c].G = j;
        a[c].n = h;
        a[c].h = i;
        a[c].oid = m;
        a[c].info = n;
        for (e = 0; e < k.length; e++) b[k[e]] = c
    }
};
KJUR.crypto.ECParameterDB.regist("sm2", 256, "FFFFFFFEFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF00000000FFFFFFFFFFFFFFFF",
    "FFFFFFFEFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF00000000FFFFFFFFFFFFFFFC",
    "28E9FA9E9D9F5E344D5A9E4BCF6509A7F39789F515AB8F92DDBCBD414D940E93",
    "FFFFFFFEFFFFFFFFFFFFFFFFFFFFFFFF7203DF6B21C6052B53BBF40939D54123", "1",
    "32C4AE2C1F1981195F9904466A39C9948FE30BBFF2660BE1715A4589334C74C7",
    "BC3736A2F4F6779C59BDCEE36B692153D0A9877CC62A474002DF32E52139F0A0", ["sm2", "SM2"]);
var SboxTable = [
        [214, 144, 233, 254, 204, 225, 61, 183, 22, 182, 20, 194, 40, 251, 44, 5],
        [43, 103, 154, 118, 42, 190, 4, 195, 170, 68, 19, 38, 73, 134, 6, 153],
        [156, 66, 80, 244, 145, 239, 152, 122, 51, 84, 11, 67, 237, 207, 172, 98],
        [228, 179, 28, 169, 201, 8, 232, 149, 128, 223, 148, 250, 117, 143, 63, 166],
        [71, 7, 167, 252, 243, 115, 23, 186, 131, 89, 60, 25, 230, 133, 79, 168],
        [104, 107, 129, 178, 113, 100, 218, 139, 248, 235, 15, 75, 112, 86, 157, 53],
        [30, 36, 14, 94, 99, 88, 209, 162, 37, 34, 124, 59, 1, 33, 120, 135],
        [212, 0, 70, 87, 159, 211, 39, 82, 76, 54, 2, 231, 160, 196, 200, 158],
        [234, 191, 138, 210, 64, 199, 56, 181, 163, 247, 242, 206, 249, 97, 21, 161],
        [224, 174, 93, 164, 155, 52, 26, 85, 173, 147, 50, 48, 245, 140, 177, 227],
        [29, 246, 226, 46, 130, 102, 202, 96, 192, 41, 35, 171, 13, 83, 78, 111],
        [213, 219, 55, 69, 222, 253, 142, 47, 3, 255, 106, 114, 109, 108, 91, 81],
        [141, 27, 175, 146, 187, 221, 188, 127, 17, 217, 92, 65, 31, 16, 90, 216],
        [10, 193, 49, 136, 165, 205, 123, 189, 45, 116, 208, 18, 184, 229, 180, 176],
        [137, 105, 151, 74, 12, 150, 119, 126, 101, 185, 241, 9, 197, 110, 198, 132],
        [24, 240, 125, 236, 58, 220, 77, 32, 121, 238, 95, 62, 215, 203, 57, 72]
    ],
    CK = [462357, 472066609, 943670861, 1415275113, 1886879365, 2358483617, 2830087869, 3301692121, 3773296373,
        4228057617, 404694573, 876298825, 1347903077, 1819507329, 2291111581, 2762715833, 3234320085, 3705924337,
        4177462797, 337322537, 808926789, 1280531041, 1752135293, 2223739545, 2695343797, 3166948049, 3638552301,
        4110090761, 269950501, 741554753, 1213159005, 1684763257
    ],
    FK = [2746333894, 1453994832, 1736282519, 2993693404];

function bigxor(a, b) {
    return a ^ b
}

function leftshift(b, a) {
    a %= 32;
    return b << a | b >>> 32 - a
}

function prefixInteger(b, a) {
    return Array(a + 1).join("0").split("").concat(String(b).split("")).slice(-a).join("")
}

function sm4Sbox(a) {
    return SboxTable[(a & 4026531840) >>> 28][(a & 251658240) >>> 24] << 24 | SboxTable[(a & 15728640) >>> 20][(a &
        983040) >>> 16] << 16 | SboxTable[(a & 61440) >>> 12][(a & 3840) >>> 8] << 8 | SboxTable[(a & 240) >>> 4][(
        a & 15) >>> 0] << 0
}

function GET_ULONG_BE(a) {
    a = sm4Sbox(a);
    return bigxor(bigxor(bigxor(a, leftshift(a, 2)), bigxor(leftshift(a, 10), leftshift(a, 18))), leftshift(a, 24))
}

function PUT_ULONG_BE(a) {
    a = sm4Sbox(a);
    return bigxor(a, bigxor(leftshift(a, 13), leftshift(a, 23)))
}

function sm4_getkey(a) {
    var b = [],
        c = [];
    b[0] = bigxor(a[0], FK[0]);
    b[1] = bigxor(a[1], FK[1]);
    b[2] = bigxor(a[2], FK[2]);
    b[3] = bigxor(a[3], FK[3]);
    for (a = 0; a < 32; a++) b[a + 4] = bigxor(b[a], PUT_ULONG_BE(bigxor(bigxor(b[a + 1], b[a + 2]), bigxor(b[a + 3],
        CK[a])))), c[a] = b[a + 4].toString(16);
    return c
}

function KJUR_encrypt_sm4(e, f) {
    for (var g = Math.ceil(e.length / 4), d = [], c = 0; c < g; c++) {
        for (var a = e.slice(c * 4, (c + 1) * 4), h = sm4_getkey(f), b = 0; b < 32; b++) a[b + 4] = bigxor(a[b],
            GET_ULONG_BE(bigxor(bigxor(a[b + 1], a[b + 2]), bigxor(a[b + 3], parseInt(h[b], 16)))));
        d = d.concat([a[35].toString(10), a[34].toString(10), a[33].toString(10), a[32].toString(10)])
    }
    return new WordArray(d)
}

function KJUR_decrypt_sm4(f, h) {
    for (var i = Math.ceil(f.length / 4), d = [], c = 0; c < i; c++) {
        for (var b = f.slice(c * 4, (c + 1) * 4), e = sm4_getkey(h), g = [], a = e.length - 1; a >= 0; a--) g[e.length -
            1 - a] = e[a];
        for (a = 0; a < 32; a++) b[a + 4] = bigxor(b[a], GET_ULONG_BE(bigxor(bigxor(b[a + 1], b[a + 2]), bigxor(b[a + 3],
            parseInt(g[a], 16)))));
        d = d.concat([b[35].toString(10), b[34].toString(10), b[33].toString(10), b[32].toString(10)])
    }
    return new WordArray(d)
}

function SM2Cipher() {
    this.ct = 1;
    this.sm3c3 = this.sm3keybase = this.p2 = null;
    this.key = Array(32);
    this.keyOff = 0
}
SM2Cipher.prototype = {
    Reset: function() {
        this.sm3keybase = new SM3Digest;
        this.sm3c3 = new SM3Digest;
        var a = this.p2.getX().toBigInteger().toRadix(16),
            b = this.p2.getY().toBigInteger().toRadix(16);
        if (a.length != 64)
            for (var d = 64 - a.length, c = 0; c < d; c++) a = "0" + a;
        if (b.length != 64 && b.length != 64) {
            d = 64 - b.length;
            for (c = 0; c < d; c++) b = "0" + b
        }
        a = this.GetWords(a);
        b = this.GetWords(b);
        if (a.length != 32)
            for (c = 0; c < 32 - a.length; c++) d = [0], a = d.concat(a);
        if (b.length != 32)
            for (c = 0; c < 32 - b.length; c++) d = [0], b = d.concat(b);
        this.sm3keybase.BlockUpdate(a, 0, a.length);
        this.sm3c3.BlockUpdate(a, 0, a.length);
        this.sm3keybase.BlockUpdate(b, 0, b.length);
        this.ct = 1;
        this.NextKey()
    },
    NextKey: function() {
        var a = new SM3Digest(this.sm3keybase);
        a.Update(this.ct >> 24 & 255);
        a.Update(this.ct >> 16 & 255);
        a.Update(this.ct >> 8 & 255);
        a.Update(this.ct & 255);
        a.DoFinal(this.key, 0);
        this.keyOff = 0;
        this.ct++
    },
    InitEncipher: function(c) {
        var a = new KJUR.crypto.SM3withSM2({
                curve: "sm2"
            }),
            b = a.generateKeyPairHex(),
            d = new BigInteger(b.ecprvhex, 16),
            a = ECPointFp.decodeFromHex(a.ecparams.curve, b.ecpubhex);
        this.p2 = c.multiply(d);
        this.Reset();
        return a
    },
    EncryptBlock: function(a) {
        this.sm3c3.BlockUpdate(a, 0, a.length);
        for (var b = 0; b < a.length; b++) {
            this.keyOff == this.key.length && this.NextKey();
            var c = this.key[this.keyOff++];
            c == 256 && (c = 0);
            a[b] ^= c
        }
    },
    InitDecipher: function(a, b) {
        this.p2 = b.multiply(a);
        this.Reset()
    },
    DecryptBlock: function(a) {
        for (var b = 0; b < a.length; b++) {
            this.keyOff == this.key.length && this.NextKey();
            var c = this.key[this.keyOff++];
            c == 256 && (c = 0);
            a[b] ^= c
        }
        this.sm3c3.BlockUpdate(a, 0, a.length)
    },
    Dofinal: function(b) {
        this.p2.getY().toBigInteger();
        var a = this.GetWords(this.p2.getY().toBigInteger().toRadix(16));
        this.sm3c3.BlockUpdate(a, 0, a.length);
        this.sm3c3.DoFinal(b, 0);
        this.Reset()
    },
    Encrypt: function(h, f) {
        var b = Array(f.length);
        Array.Copy(f, 0, b, 0, f.length);
        var a = this.InitEncipher(h);
        this.EncryptBlock(b);
        var e = Array(32);
        this.Dofinal(e);
        var c = a.getX().toBigInteger().toRadix(16);
        if (c.length != 64)
            for (var g = 64 - c.length, d = 0; d < g; d++) c = "0" + c;
        a = a.getY().toBigInteger().toRadix(16);
        if (a.length != 64 && a.length != 64) {
            g = 64 - a.length;
            for (d = 0; d < g; d++) a = "0" + a
        }
        b = this.GetHex(b).toString();
        e = this.GetHex(e).toString();
        return c + a + b + e
    },
    GetWords: function(b) {
        var d = [],
            c = b.length;
        if (c < 64 && c > 60)
            for (var e = 64 - c, a = 0; a < e; a++) b = "0" + b;
        for (a = 0; a < c; a += 2) e = b.substr(a, 2), d[d.length] = parseInt(e, 16);
        return d
    },
    GetHex: function(b) {
        for (var c = [], d = 0, a = 0; a < b.length * 2; a += 2) c[a >>> 3] |= parseInt(b[d]) << 24 - a % 8 * 4,
            d++;
        return new WordArray(c, b.length)
    },
    Decrypt: function(f, b) {
        var a = b.substr(0, 64),
            c = b.substr(0 + a.length, 64),
            d = b.substr(a.length + c.length, b.length - a.length - c.length - 64),
            e = b.substr(b.length - 64),
            d = this.GetWords(d),
            a = this.CreatePoint(a, c);
        this.InitDecipher(f, a);
        this.DecryptBlock(d);
        a = Array(32);
        this.Dofinal(a);
        if (this.GetHex(a).toString() == e) var e = this.GetHex(d),
            g = (new charSet).stringifyUTF8(e);
        else console.error("decrypt error!");
        return g
    },
    CreatePoint: function(a, b) {
        var c = new KJUR.crypto.SM3withSM2({
            curve: "sm2"
        });
        return ECPointFp.decodeFromHex(c.ecparams.curve, "04" + a + b)
    }
};

function encryptbySM2(e, a) {
    var b = (new charSet).parseUTF8(e);
    a.length > 128 && (a = a.substr(a.length - 128));
    var d = a.substr(0, 64),
        f = a.substr(64),
        c = new SM2Cipher,
        d = c.CreatePoint(d, f),
        b = c.GetWords(b.toString()),
        b = c.Encrypt(d, b);
    return "04" + b
}

function decryptbySM2(a, b) {
    var a = a.substring(2, a.length),
        c = new BigInteger(b, 16);
    return (new SM2Cipher).Decrypt(c, a)
}

function encryptbySM3(a) {
    return (new SM3Digest).encrypt(a)
}

function encryptbySM4(b, c) {
    var a = new charSet,
        d = KJUR_encrypt_sm4(a.parseUTF8(b).getArrs(), a.parseUTF8(c).getArrs());
    return a.HexStringify(d)
}

function decryptbySM4(c, d) {
    var a = new charSet,
        b = a.HexParse(c),
        a = a.parseUTF8(d),
        b = KJUR_decrypt_sm4(b.getArrs(), a.getArrs());
    return (new charSet).stringifyUTF8(b)
}

function encryptbyRSA(a, b, c) {
    return encryptbyrsa(a, b, c)
}

function decryptbyRSA(a, b, c, d) {
    return decryptbyrsa(a, b, c, d)
}

function encryptbySHA1(a) {
    return (new sha1Obj).encryptbysha1(a)
}

function encryptbySHA256(a) {
    return (new SHA256Obj).encryptbysha256(a)
}

function encryptbyMD5(a) {
    return (new md5Obj).encryptbymd5(a)
}

function encryptbyDES(a, b) {
    return (new desObj).encryptbydes(b, a)
}

function decryptbyDES(a, b) {
    return (new desObj).decryptbydes(b, a)
}

function encryptby3DES(a, b) {
    return (new desObj).encryptbyTripledes(b, a)
}

function decryptby3DES(a, b) {
    return (new desObj).decryptbyTripledes(b, a)
}

function encryptbyBASE64(a) {
    return (new base64Obj).encryptbybase64(a)
}

function decryptbyBASE64(a) {
    return (new base64Obj).decryptbybase64(a)
}

function encryptbyAES(a, b) {
    return (new aesObj).encryptbyaes(b, a)
}

function decryptbyAES(a, b) {
    return (new aesObj).decryptbyaes(b, a)
}
module.exports = {
    ...aesObj,
    encryptbyAES,
    decryptbyAES,
    desObj,
    encryptbyDES,
    decryptbyDES,

    encryptbyRSA,
    decryptbyRSA,
    getencryptoRSA,
    RSAKey,
    RSAEncrypt,
    RSADecrypt,
    RSAGenerate,
    RSASetPublic,
    RSASetPrivate,
    RSASetPrivateEx,

    md5Obj,
    encryptbyMD5,
    sha1Obj,
    encryptbySHA1,
    SHA256Obj,
    encryptbySHA256,

    base64Obj,
    encryptbyBASE64,
    decryptbyBASE64,

    encryptbySM2,
    decryptbySM2,
    SM2Cipher,

    encryptbySM3,

    encryptbySM4,
    decryptbySM4,

    generateRSAKeyPair() {
        return new Promise((resolve, reject) => {
            console.log(window.crypto.subtle);
            window.crypto.subtle.generateKey({
                        name: "RSA-OAEP",
                        modulusLength: 1024, //can be 1024, 2048, or 4096
                        publicExponent: new Uint8Array([0x01, 0x00, 0x01]),
                        hash: {
                            name: "SHA-256"
                        }, //can be "SHA-1", "SHA-256", "SHA-384", or "SHA-512"
                    },
                    true, //whether the key is extractable (i.e. can be used in exportKey)
                    ["encrypt", "decrypt"] //must be ["encrypt", "decrypt"] or ["wrapKey", "unwrapKey"]
                )
                .then((key) => {
                    //returns a keypair object
                    return Promise.all([window.crypto.subtle.exportKey(
                        "pkcs8", //can be "jwk" (public or private), "spki" (public only), or "pkcs8" (private only)
                        key.privateKey //can be a publicKey or privateKey, as long as extractable was true
                    ), window.crypto.subtle.exportKey(
                        "spki", //can be "jwk" (public or private), "spki" (public only), or "pkcs8" (private only)
                        key.publicKey //can be a publicKey or privateKey, as long as extractable was true
                    )]);
                })
                .then((results) => {
                    let ret = {};
                    let bin2text = (bin) => {
                        return btoa(String.fromCharCode(...new Uint8Array(bin)));
                    }
                    console.log(results);
                    ret.privateKey = bin2text(results[0]);
                    ret.publicKey = bin2text(results[1]);
                    resolve && resolve(ret);
                })
                .catch(function(err) {
                    console.error(err);
                    reject && reject(err);
                });

        })



    }
}
