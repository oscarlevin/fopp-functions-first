if (allTraceData === undefined) {
 var allTraceData = {};
 }
 allTraceData["clens17_4_1"] = {"code": "nested1 = [['a', 'b', 'c'],['d', 'e'],['f', 'g', 'h']]\nfor x in nested1:\n    print(\"level1: \")\n    for y in x:\n        print(\"    level2: \" + y)\n\n", "trace": [{"line": 1, "event": "step_line", "func_name": "<module>", "globals": {}, "ordered_globals": [], "stack_to_render": [], "heap": {}, "stdout": ""}, {"line": 2, "event": "step_line", "func_name": "<module>", "globals": {"nested1": ["REF", 1]}, "ordered_globals": ["nested1"], "stack_to_render": [], "heap": {"1": ["LIST", ["REF", 2], ["REF", 3], ["REF", 4]], "2": ["LIST", "a", "b", "c"], "3": ["LIST", "d", "e"], "4": ["LIST", "f", "g", "h"]}, "stdout": ""}, {"line": 3, "event": "step_line", "func_name": "<module>", "globals": {"nested1": ["REF", 1], "x": ["REF", 2]}, "ordered_globals": ["nested1", "x"], "stack_to_render": [], "heap": {"1": ["LIST", ["REF", 2], ["REF", 3], ["REF", 4]], "2": ["LIST", "a", "b", "c"], "3": ["LIST", "d", "e"], "4": ["LIST", "f", "g", "h"]}, "stdout": ""}, {"line": 4, "event": "step_line", "func_name": "<module>", "globals": {"nested1": ["REF", 1], "x": ["REF", 2]}, "ordered_globals": ["nested1", "x"], "stack_to_render": [], "heap": {"1": ["LIST", ["REF", 2], ["REF", 3], ["REF", 4]], "2": ["LIST", "a", "b", "c"], "3": ["LIST", "d", "e"], "4": ["LIST", "f", "g", "h"]}, "stdout": "level1: \n"}, {"line": 5, "event": "step_line", "func_name": "<module>", "globals": {"nested1": ["REF", 1], "x": ["REF", 2], "y": "a"}, "ordered_globals": ["nested1", "x", "y"], "stack_to_render": [], "heap": {"1": ["LIST", ["REF", 2], ["REF", 3], ["REF", 4]], "2": ["LIST", "a", "b", "c"], "3": ["LIST", "d", "e"], "4": ["LIST", "f", "g", "h"]}, "stdout": "level1: \n"}, {"line": 4, "event": "step_line", "func_name": "<module>", "globals": {"nested1": ["REF", 1], "x": ["REF", 2], "y": "a"}, "ordered_globals": ["nested1", "x", "y"], "stack_to_render": [], "heap": {"1": ["LIST", ["REF", 2], ["REF", 3], ["REF", 4]], "2": ["LIST", "a", "b", "c"], "3": ["LIST", "d", "e"], "4": ["LIST", "f", "g", "h"]}, "stdout": "level1: \n    level2: a\n"}, {"line": 5, "event": "step_line", "func_name": "<module>", "globals": {"nested1": ["REF", 1], "x": ["REF", 2], "y": "b"}, "ordered_globals": ["nested1", "x", "y"], "stack_to_render": [], "heap": {"1": ["LIST", ["REF", 2], ["REF", 3], ["REF", 4]], "2": ["LIST", "a", "b", "c"], "3": ["LIST", "d", "e"], "4": ["LIST", "f", "g", "h"]}, "stdout": "level1: \n    level2: a\n"}, {"line": 4, "event": "step_line", "func_name": "<module>", "globals": {"nested1": ["REF", 1], "x": ["REF", 2], "y": "b"}, "ordered_globals": ["nested1", "x", "y"], "stack_to_render": [], "heap": {"1": ["LIST", ["REF", 2], ["REF", 3], ["REF", 4]], "2": ["LIST", "a", "b", "c"], "3": ["LIST", "d", "e"], "4": ["LIST", "f", "g", "h"]}, "stdout": "level1: \n    level2: a\n    level2: b\n"}, {"line": 5, "event": "step_line", "func_name": "<module>", "globals": {"nested1": ["REF", 1], "x": ["REF", 2], "y": "c"}, "ordered_globals": ["nested1", "x", "y"], "stack_to_render": [], "heap": {"1": ["LIST", ["REF", 2], ["REF", 3], ["REF", 4]], "2": ["LIST", "a", "b", "c"], "3": ["LIST", "d", "e"], "4": ["LIST", "f", "g", "h"]}, "stdout": "level1: \n    level2: a\n    level2: b\n"}, {"line": 4, "event": "step_line", "func_name": "<module>", "globals": {"nested1": ["REF", 1], "x": ["REF", 2], "y": "c"}, "ordered_globals": ["nested1", "x", "y"], "stack_to_render": [], "heap": {"1": ["LIST", ["REF", 2], ["REF", 3], ["REF", 4]], "2": ["LIST", "a", "b", "c"], "3": ["LIST", "d", "e"], "4": ["LIST", "f", "g", "h"]}, "stdout": "level1: \n    level2: a\n    level2: b\n    level2: c\n"}, {"line": 2, "event": "step_line", "func_name": "<module>", "globals": {"nested1": ["REF", 1], "x": ["REF", 2], "y": "c"}, "ordered_globals": ["nested1", "x", "y"], "stack_to_render": [], "heap": {"1": ["LIST", ["REF", 2], ["REF", 3], ["REF", 4]], "2": ["LIST", "a", "b", "c"], "3": ["LIST", "d", "e"], "4": ["LIST", "f", "g", "h"]}, "stdout": "level1: \n    level2: a\n    level2: b\n    level2: c\n"}, {"line": 3, "event": "step_line", "func_name": "<module>", "globals": {"nested1": ["REF", 1], "x": ["REF", 3], "y": "c"}, "ordered_globals": ["nested1", "x", "y"], "stack_to_render": [], "heap": {"1": ["LIST", ["REF", 2], ["REF", 3], ["REF", 4]], "2": ["LIST", "a", "b", "c"], "3": ["LIST", "d", "e"], "4": ["LIST", "f", "g", "h"]}, "stdout": "level1: \n    level2: a\n    level2: b\n    level2: c\n"}, {"line": 4, "event": "step_line", "func_name": "<module>", "globals": {"nested1": ["REF", 1], "x": ["REF", 3], "y": "c"}, "ordered_globals": ["nested1", "x", "y"], "stack_to_render": [], "heap": {"1": ["LIST", ["REF", 2], ["REF", 3], ["REF", 4]], "2": ["LIST", "a", "b", "c"], "3": ["LIST", "d", "e"], "4": ["LIST", "f", "g", "h"]}, "stdout": "level1: \n    level2: a\n    level2: b\n    level2: c\nlevel1: \n"}, {"line": 5, "event": "step_line", "func_name": "<module>", "globals": {"nested1": ["REF", 1], "x": ["REF", 3], "y": "d"}, "ordered_globals": ["nested1", "x", "y"], "stack_to_render": [], "heap": {"1": ["LIST", ["REF", 2], ["REF", 3], ["REF", 4]], "2": ["LIST", "a", "b", "c"], "3": ["LIST", "d", "e"], "4": ["LIST", "f", "g", "h"]}, "stdout": "level1: \n    level2: a\n    level2: b\n    level2: c\nlevel1: \n"}, {"line": 4, "event": "step_line", "func_name": "<module>", "globals": {"nested1": ["REF", 1], "x": ["REF", 3], "y": "d"}, "ordered_globals": ["nested1", "x", "y"], "stack_to_render": [], "heap": {"1": ["LIST", ["REF", 2], ["REF", 3], ["REF", 4]], "2": ["LIST", "a", "b", "c"], "3": ["LIST", "d", "e"], "4": ["LIST", "f", "g", "h"]}, "stdout": "level1: \n    level2: a\n    level2: b\n    level2: c\nlevel1: \n    level2: d\n"}, {"line": 5, "event": "step_line", "func_name": "<module>", "globals": {"nested1": ["REF", 1], "x": ["REF", 3], "y": "e"}, "ordered_globals": ["nested1", "x", "y"], "stack_to_render": [], "heap": {"1": ["LIST", ["REF", 2], ["REF", 3], ["REF", 4]], "2": ["LIST", "a", "b", "c"], "3": ["LIST", "d", "e"], "4": ["LIST", "f", "g", "h"]}, "stdout": "level1: \n    level2: a\n    level2: b\n    level2: c\nlevel1: \n    level2: d\n"}, {"line": 4, "event": "step_line", "func_name": "<module>", "globals": {"nested1": ["REF", 1], "x": ["REF", 3], "y": "e"}, "ordered_globals": ["nested1", "x", "y"], "stack_to_render": [], "heap": {"1": ["LIST", ["REF", 2], ["REF", 3], ["REF", 4]], "2": ["LIST", "a", "b", "c"], "3": ["LIST", "d", "e"], "4": ["LIST", "f", "g", "h"]}, "stdout": "level1: \n    level2: a\n    level2: b\n    level2: c\nlevel1: \n    level2: d\n    level2: e\n"}, {"line": 2, "event": "step_line", "func_name": "<module>", "globals": {"nested1": ["REF", 1], "x": ["REF", 3], "y": "e"}, "ordered_globals": ["nested1", "x", "y"], "stack_to_render": [], "heap": {"1": ["LIST", ["REF", 2], ["REF", 3], ["REF", 4]], "2": ["LIST", "a", "b", "c"], "3": ["LIST", "d", "e"], "4": ["LIST", "f", "g", "h"]}, "stdout": "level1: \n    level2: a\n    level2: b\n    level2: c\nlevel1: \n    level2: d\n    level2: e\n"}, {"line": 3, "event": "step_line", "func_name": "<module>", "globals": {"nested1": ["REF", 1], "x": ["REF", 4], "y": "e"}, "ordered_globals": ["nested1", "x", "y"], "stack_to_render": [], "heap": {"1": ["LIST", ["REF", 2], ["REF", 3], ["REF", 4]], "2": ["LIST", "a", "b", "c"], "3": ["LIST", "d", "e"], "4": ["LIST", "f", "g", "h"]}, "stdout": "level1: \n    level2: a\n    level2: b\n    level2: c\nlevel1: \n    level2: d\n    level2: e\n"}, {"line": 4, "event": "step_line", "func_name": "<module>", "globals": {"nested1": ["REF", 1], "x": ["REF", 4], "y": "e"}, "ordered_globals": ["nested1", "x", "y"], "stack_to_render": [], "heap": {"1": ["LIST", ["REF", 2], ["REF", 3], ["REF", 4]], "2": ["LIST", "a", "b", "c"], "3": ["LIST", "d", "e"], "4": ["LIST", "f", "g", "h"]}, "stdout": "level1: \n    level2: a\n    level2: b\n    level2: c\nlevel1: \n    level2: d\n    level2: e\nlevel1: \n"}, {"line": 5, "event": "step_line", "func_name": "<module>", "globals": {"nested1": ["REF", 1], "x": ["REF", 4], "y": "f"}, "ordered_globals": ["nested1", "x", "y"], "stack_to_render": [], "heap": {"1": ["LIST", ["REF", 2], ["REF", 3], ["REF", 4]], "2": ["LIST", "a", "b", "c"], "3": ["LIST", "d", "e"], "4": ["LIST", "f", "g", "h"]}, "stdout": "level1: \n    level2: a\n    level2: b\n    level2: c\nlevel1: \n    level2: d\n    level2: e\nlevel1: \n"}, {"line": 4, "event": "step_line", "func_name": "<module>", "globals": {"nested1": ["REF", 1], "x": ["REF", 4], "y": "f"}, "ordered_globals": ["nested1", "x", "y"], "stack_to_render": [], "heap": {"1": ["LIST", ["REF", 2], ["REF", 3], ["REF", 4]], "2": ["LIST", "a", "b", "c"], "3": ["LIST", "d", "e"], "4": ["LIST", "f", "g", "h"]}, "stdout": "level1: \n    level2: a\n    level2: b\n    level2: c\nlevel1: \n    level2: d\n    level2: e\nlevel1: \n    level2: f\n"}, {"line": 5, "event": "step_line", "func_name": "<module>", "globals": {"nested1": ["REF", 1], "x": ["REF", 4], "y": "g"}, "ordered_globals": ["nested1", "x", "y"], "stack_to_render": [], "heap": {"1": ["LIST", ["REF", 2], ["REF", 3], ["REF", 4]], "2": ["LIST", "a", "b", "c"], "3": ["LIST", "d", "e"], "4": ["LIST", "f", "g", "h"]}, "stdout": "level1: \n    level2: a\n    level2: b\n    level2: c\nlevel1: \n    level2: d\n    level2: e\nlevel1: \n    level2: f\n"}, {"line": 4, "event": "step_line", "func_name": "<module>", "globals": {"nested1": ["REF", 1], "x": ["REF", 4], "y": "g"}, "ordered_globals": ["nested1", "x", "y"], "stack_to_render": [], "heap": {"1": ["LIST", ["REF", 2], ["REF", 3], ["REF", 4]], "2": ["LIST", "a", "b", "c"], "3": ["LIST", "d", "e"], "4": ["LIST", "f", "g", "h"]}, "stdout": "level1: \n    level2: a\n    level2: b\n    level2: c\nlevel1: \n    level2: d\n    level2: e\nlevel1: \n    level2: f\n    level2: g\n"}, {"line": 5, "event": "step_line", "func_name": "<module>", "globals": {"nested1": ["REF", 1], "x": ["REF", 4], "y": "h"}, "ordered_globals": ["nested1", "x", "y"], "stack_to_render": [], "heap": {"1": ["LIST", ["REF", 2], ["REF", 3], ["REF", 4]], "2": ["LIST", "a", "b", "c"], "3": ["LIST", "d", "e"], "4": ["LIST", "f", "g", "h"]}, "stdout": "level1: \n    level2: a\n    level2: b\n    level2: c\nlevel1: \n    level2: d\n    level2: e\nlevel1: \n    level2: f\n    level2: g\n"}, {"line": 4, "event": "step_line", "func_name": "<module>", "globals": {"nested1": ["REF", 1], "x": ["REF", 4], "y": "h"}, "ordered_globals": ["nested1", "x", "y"], "stack_to_render": [], "heap": {"1": ["LIST", ["REF", 2], ["REF", 3], ["REF", 4]], "2": ["LIST", "a", "b", "c"], "3": ["LIST", "d", "e"], "4": ["LIST", "f", "g", "h"]}, "stdout": "level1: \n    level2: a\n    level2: b\n    level2: c\nlevel1: \n    level2: d\n    level2: e\nlevel1: \n    level2: f\n    level2: g\n    level2: h\n"}, {"line": 2, "event": "step_line", "func_name": "<module>", "globals": {"nested1": ["REF", 1], "x": ["REF", 4], "y": "h"}, "ordered_globals": ["nested1", "x", "y"], "stack_to_render": [], "heap": {"1": ["LIST", ["REF", 2], ["REF", 3], ["REF", 4]], "2": ["LIST", "a", "b", "c"], "3": ["LIST", "d", "e"], "4": ["LIST", "f", "g", "h"]}, "stdout": "level1: \n    level2: a\n    level2: b\n    level2: c\nlevel1: \n    level2: d\n    level2: e\nlevel1: \n    level2: f\n    level2: g\n    level2: h\n"}, {"line": 2, "event": "return", "func_name": "<module>", "globals": {"nested1": ["REF", 1], "x": ["REF", 4], "y": "h"}, "ordered_globals": ["nested1", "x", "y"], "stack_to_render": [], "heap": {"1": ["LIST", ["REF", 2], ["REF", 3], ["REF", 4]], "2": ["LIST", "a", "b", "c"], "3": ["LIST", "d", "e"], "4": ["LIST", "f", "g", "h"]}, "stdout": "level1: \n    level2: a\n    level2: b\n    level2: c\nlevel1: \n    level2: d\n    level2: e\nlevel1: \n    level2: f\n    level2: g\n    level2: h\n"}]}