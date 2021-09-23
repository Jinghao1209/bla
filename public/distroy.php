<?php
session_start();
session_destroy();
?>
<script>localStorage.clear(); alert('Clear!');</script>