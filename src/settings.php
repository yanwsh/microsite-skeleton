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

return [
    'settings' => [
        'displayErrorDetails' => true, // set to false in production
        // Renderer settings
        'renderer' => [
            'template_path' => __DIR__ . '/../src/',
            'cache_path' => __DIR__ . '/../storages/cache/'
        ],
        // Monolog settings
        'logger' => [
            'name' => 'microsite-skeleton-app',
            'path' => __DIR__ . '/../storages/logs/app.log',
        ],
    ],
];