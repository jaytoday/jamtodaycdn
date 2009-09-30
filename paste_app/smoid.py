# Copyright 2008 Thomas Quemard
#
# Paste-It is free software; you can redistribute it and/or modify it
# under the terms of the GNU General Public License as published
# by the Free Software Foundation; either version 3.0, or (at your option)
# any later version.
#
# Paste-It  is distributed in the hope that it will be useful, but
# WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY
# or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public
# License for more details.

import re

class Test:
    confidence = -1

    def __init__(self):
        self.content = ""

    def is_re_found(self, regex, start_at = 0):
        return re.compile(regex).search(self.content, start_at)

    def is_re_matched(self, regex, start_at = 0):
        return re.compile(regex).match(self.content, start_at)

    def test(self, content):
        self.content = content
        return self._test()


class TestChain:
    tests = []

    def __init__(self):
        pass

    def test(self, content):
        for otest in self.tests:
            result = otest.test(content)
            print otest.name, result

    def test_file(self, file_path):
        result = False
        f = open(file_path, "r")
        if f != None:
            self.test(f.read())

        return result


class PhpTestHeader (Test):
    name = "PhpTestHeader"

    def _test(self):
        self.confidence = 0
        result = False
        if self.is_re_matched("#!/(.+)php(\n|$)") :
            result = True
        return result


class PhpTestOpeningTag (Test):
    name = "PhpTestHeader"

    def _test(self):
        self.confidence = 0
        result = False
        if self.is_re_matched("(^|\n|\r)<\?php\(?:s|\n|\r)"):
            result = True
        return result


class PhpInstanceMember (Test):
    name = "PhpInstanceMember"

    def _test(self):
        self.confidence = 0
        result = False
        if self.is_re_matched("\$[a-zA-Z_][a-zA-Z0-9]*->"):
            result = True
        return result

class PhpTestChain (TestChain):
    def __init__(self):
        self.tests.append(PhpTestHeader())


class PythonTestHeader(Test):
    name = "PythonTestHeader"

    def _test(self):
        self.confidence = 0
        result = False
        if self.is_re_matched("#!/(.+)python(\n|$)") :
            result = True
        return result


class PythonTestChain (TestChain):
    def __init__(self):
        self.tests.append(PythonTestHeader())


class RubyTestHeader(Test):
    name = "RubyTestHeader"

    def _test(self):
        self.confidence = 0
        result = False
        if self.is_re_matched("^#!/(.+)ruby(\n|$)") :
            result = True
        return result


class RubyTestChain (TestChain):
    def __init__(self):
        self.tests.append(RubyTestHeader())


chain = PythonTestChain()
chain.test_file("/tmp/smoid.txt")


