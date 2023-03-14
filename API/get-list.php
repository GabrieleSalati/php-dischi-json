<?php

$records = file_get_contents(__DIR__ . "/../data/library.json");

header('Content Type: application/json; charset=utf-8');

// echo $records;