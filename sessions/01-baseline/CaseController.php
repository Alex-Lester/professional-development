<?php

declare(strict_types=1);

class CaseController
{
    public function __construct(private readonly PDO $db)
    {
    }

    /**
     * @throws JsonException
     */
    public function show(int $id): void
    {
        header('Content-Type: application/json');

        $caseStatement = $this->db->prepare(
            'SELECT id, subject, status, created_at FROM cases WHERE id = :id'
        );
        $caseStatement->execute(['id' => $id]);
        $case = $caseStatement->fetch(PDO::FETCH_ASSOC);

        if ($case === false) {
            http_response_code(404);
            echo json_encode(['error' => 'Case not found']);
            return;
        }

        $emailStatement = $this->db->prepare(
            'SELECT id, sender, subject, received_at
             FROM emails
             WHERE case_id = :case_id
             ORDER BY received_at'
        );
        $emailStatement->execute(['case_id' => $id]);
        $emails = $emailStatement->fetchAll(PDO::FETCH_ASSOC);

        echo json_encode(['case' => $case, 'emails' => $emails], JSON_THROW_ON_ERROR);
    }
}