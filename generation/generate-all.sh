#!/bin/sh -eux

./generation/sources/builtin.sh v1.20.1

./generation/sources/cert-manager.sh v1.1.0
./generation/sources/external-dns.sh v0.7.5
