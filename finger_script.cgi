#!/usr/local/bin/perl -w

print <<EOF;
Content-type: text/html

<html>
<head>
<title>ECN finger info: $login</title>
</head>
<body>
<h1>$login</h1>
EOF

#    $finger = `finger -l sbagchi\@dynamo.ecn.purdue.edu`;
    $finger = `finger -l sbagchi`;

    if ($finger =~ /In real life: *\?/) {
        if ($finger =~ /Mail forwarded to ([a-zA-Z0-9\@\.]+)/) {
            $finger = `finger $1`;
        }
    }
    print "<pre>\n$finger\n</pre>\n";

    print <<EOF;
</form>
</html>
</body>
EOF
