<?php
/**
 * This file is part of the MWD Microsite project.
 *
 * (c) Wensheng Yan <yanwsh@gmail.com>
 * Date: 5/15/16
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
use Slim\Views\Twig;
use Monolog\Logger;
use Monolog\Processor\UidProcessor;
use Monolog\Handler\StreamHandler;

// DIC configuration

$container = $app->getContainer();

// view renderer
$container['renderer'] = function ($c) {
    $settings = $c->get('settings')['renderer'];
    return new Twig($settings['template_path'],[
        //'cache' => $settings['cache_path']
        'cache' => false
    ]);
};
// monolog
$container['logger'] = function ($c) {
    $settings = $c->get('settings')['logger'];
    $logger = new Logger($settings['name']);
    $logger->pushProcessor(new UidProcessor());
    $logger->pushHandler(new StreamHandler($settings['path'], Logger::DEBUG));
    return $logger;
};